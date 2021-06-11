import { Employee } from '../models/employee.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ListGenerator {
  generate(labels: string[], numRange: [number, number], width: number): Employee[] {
    const result: Employee[] = [];
    for (let i = 0; i < width; i += 1) {
      result.push(this.generateNode(labels, numRange));
    }
    return result;
  }

  generateNumber(numRange: [number, number]): number {
    const diff = numRange[1] - numRange[0];
    return numRange[0] + Math.floor(Math.random() * diff);
  }

  generateLabel(labels: string[]): string {
    return labels[Math.floor(Math.random() * labels.length)];
  }

  private generateNode(labels: string[], numRange: [number, number]): Employee {
    return {
      label: this.generateLabel(labels),
      num: this.generateNumber(numRange)
    };
  }
}
