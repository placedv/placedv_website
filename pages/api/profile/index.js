const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

function handler(req, res) {
    async function main() {
        await prisma.$connect()
        const getUser = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                image: true
            }
        })
        const getUserParse = JSON.stringify(getUser)
        return res.status(201).json(JSON.parse(getUserParse))
    }
    main()
        .catch((e) => {
            throw res.status(400).json({message: e})
        })
        .finally(async () => {
            await prisma.$disconnect()
        })
}

export default handler
