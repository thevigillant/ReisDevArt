
import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ReisDevArt',
        short_name: 'ReisDevArt',
        description: 'Transformo ideias em experiências digitais futuristas.',
        start_url: '/',
        display: 'standalone',
        background_color: '#030712',
        theme_color: '#3b82f6',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}
