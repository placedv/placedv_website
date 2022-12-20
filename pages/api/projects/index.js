// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    res.status(201).json([
        {
            id: 0,
            name: 'Placedv Pyramid',
            description_it: 'Placedv Pyramid ti aiuta a gestire l\'intera acquisizione del pubblico delle tue campagne.',
            description_en: 'Placedv Pyramid helps you to manage the whole acquisition of your campaigns audience.',
            link: 'https://pyramid.placedv.com',
            external: true
        },
        {
            id: 1,
            name: 'Goofls',
            description_it: 'Inserisci gli script di Google senza errori. Blocca gli errori di rendering del DOM.',
            description_en: 'Inject Google scripts without errors. Block DOM\'s render errors.',
            link: 'https://goofls.sergiocasolari.com',
            external: true
        }
    ])
}
