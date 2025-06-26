import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    content: {
        preview: {
            api: 'https://dev-api.nuxt.studio',
        }
    }
});