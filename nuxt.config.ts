import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
    content: {
        preview: {
            dev: true, 
            api: 'http://localhost:1337',
            gitInfo: {
                owner: 'larbish',
                name: 'docus-v3'
            }
        }
    }
});