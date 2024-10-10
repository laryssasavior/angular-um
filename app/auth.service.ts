import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Simulamos dois tipos de usuários: admin e convidado
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' }
  ];

  // Armazenar o usuário logado
  private currentUser: any;

  constructor() { }

  // Método para realizar o login
  login(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  // Método para retornar o papel do usuário logado
  getRole() {
    return this.currentUser ? this.currentUser.role : null;
  }

  // Verifica se há um usuário logado
  isAuthenticated() {
    return !!this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}