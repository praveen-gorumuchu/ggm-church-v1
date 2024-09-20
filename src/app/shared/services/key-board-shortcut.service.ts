import { Injectable, HostListener, EventEmitter } from '@angular/core';
import { ZoomService } from './zoom.service'; // Adjust the path as needed

@Injectable({
    providedIn: 'root',
})
export class KeyboardShortcutsService {
    toggleDrawer: EventEmitter<void> = new EventEmitter<void>();

    constructor(private zoomService: ZoomService) { }

    // Define keyboard shortcuts
    private shortcuts = {
        zoomIn: (event: KeyboardEvent) => {
            event.preventDefault();
            this.zoomService.zoomIn();
        },
        zoomOut: (event: KeyboardEvent) => {
            event.preventDefault();
            this.zoomService.zoomOut();
        },
        undo: (event: KeyboardEvent) => {
            // event.preventDefault();
        },
        toggleMenu: (event: KeyboardEvent) => {
            event.preventDefault();
            this.toggleDrawer.emit(); // Emit the toggle event
        },
    };

    @HostListener('window:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
        const { ctrlKey, metaKey, key } = event;

        if ((ctrlKey || metaKey) && (key === '+' || key === '=')) {
            this.shortcuts.zoomIn(event);
        } else if ((ctrlKey || metaKey) && key === '-') {
            this.shortcuts.zoomOut(event);
        } else if ((ctrlKey || metaKey) && key === 'z') {
            this.shortcuts.undo(event);
        } else if ((ctrlKey || metaKey) && key === 'm') {
            this.shortcuts.toggleMenu(event); // Use 'm' for toggle menu
        }
    }
    getSelectedTextData(): { startIndex: number; endIndex: number } | null {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
            const range = selection.getRangeAt(0);
            const startContainer = range.startContainer;
            const endContainer = range.endContainer;

            const startIndex = this.getElementIndex(startContainer);
            const endIndex = this.getElementIndex(endContainer);

            return { startIndex, endIndex };
        }
        return null;
    }

    private getElementIndex(container: Node): number {
        // If the container is a text node, get its parent
        if (container.nodeType === Node.TEXT_NODE) {
            container = container.parentNode as Node;
        }
    
        // Use let instead of const to allow reassigning the variable
        let parent: HTMLElement | null = container.parentNode as HTMLElement;
    
        // If the parent is not the <p> tag, find the closest <p> ancestor
        while (parent && parent.nodeName !== 'P') {
            container = parent;
            parent = container.parentNode as HTMLElement; // Reassign parent here
    
            // Add a null check
            if (!parent) {
                break; // Exit if parent is null
            }
        }
    
        // Ensure container is still valid before accessing its parent
        if (container && container.parentNode) {
            return Array.from(container.parentNode.children).indexOf(container as any);
        }
    
        // Return -1 if the index cannot be determined
        return -1;
    }
    




}
