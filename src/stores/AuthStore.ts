import { defineStore } from "pinia";

export const useAuthStore = defineStore("authStore", {
  state() {
    return {
      session: {} as any,
    };
  },
  actions: {
    async login(username: string, password: string) {
      // @ts-ignore
      this.session = await this.authService.login(username, password);
      localStorage.setItem("token", this.session.token);
      // @ts-ignore
      this.$router.push("/dashboard");
    },
    isLoggedIn() {
        const token = localStorage.getItem("token");
        if (token) {
            return true;
        } else {
            return false;
        }
    },
    logout() {
      this.session = {};
      localStorage.removeItem("token");
      // @ts-ignore
      this.$router.push("/login");
    },
    init () {
        const token = localStorage.getItem("token");
        if (token) {
            this.session.token = token;
        }
    },
    async register(fullName: string, email: string, password: string): Promise<any> {
        let username = email;
        
      // @ts-ignore
        const session = await this.userService.register(fullName, username, email, password)
        // @ts-ignore
        this.$router.push("/result");
        return session;
    }
  },
});