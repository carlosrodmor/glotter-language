import { Directive, ElementRef, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appFadeIn]',
  standalone: true
})
export class FadeInDirective implements OnInit, OnDestroy {
  private observer: IntersectionObserver;

  constructor(private el: ElementRef) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Elemento entra en viewport
            this.el.nativeElement.style.opacity = '1';
            this.el.nativeElement.style.transform = 'translateY(0)';
          } else {
            // Elemento sale del viewport
            this.el.nativeElement.style.opacity = '0';
            this.el.nativeElement.style.transform = 'translateY(20px)';
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px'
      }
    );
  }

  ngOnInit() {
    // Configuración inicial del elemento
    this.el.nativeElement.style.opacity = '0';
    this.el.nativeElement.style.transform = 'translateY(20px)';
    this.el.nativeElement.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
    
    // Comenzar a observar el elemento
    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy() {
    // Limpiar el observer cuando el componente se destruye
    this.observer.disconnect();
  }
}
