import "dotenv/config"
import { z } from "zod"

const Env = z.object({
    JOBIJOBA_CLIENT_ID: z.string(),
    JOBIJOBA_CLIENT_SECRET: z.string(),
});

const env = Env.parse({
    JOBIJOBA_CLIENT_ID: process.env.JOBIJOBA_CLIENT_ID,
    JOBIJOBA_CLIENT_SECRET: process.env.JOBIJOBA_CLIENT_SECRET,
})

export default env
