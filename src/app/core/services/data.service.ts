import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  // Método para salvar dados em arquivo JSON
  saveData(filename: string, data: any) {
    localStorage.setItem(filename, JSON.stringify(data));
  }

  // Método para carregar dados de arquivo JSON
  loadData(filename: string): any {
    const data = localStorage.getItem(filename);
    return data ? JSON.parse(data) : null;
  }
}
