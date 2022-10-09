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
      this.session.token = "123456";
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
    }
  },
});