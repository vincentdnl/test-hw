import request from "supertest"
import app from "../app"
import { login, fetchJobs } from "../infrastructure/external/jobijoba"

jest.mock("../infrastructure/external/jobijoba", () => ({
    login: jest.fn(),
    fetchJobs: jest.fn()
}))

const MOCK_TOKEN = {
    token: "testToken"
}
const MOCK_JOBS_RESPONSE_OK = {
    code: 200,
    message: "OK",
    data: {
        total: 642,
        ads: [
            {
                id: "9e2bdd43f00c3c7a191c506c014888e4",
                link: "https://www.jj-tracker.com/fr/redirect/offer/1017/9e2bdd43f00c3c7a191c506c014888e4",
                title: "Informaticien Analyste Développeur",
                description:
                    "Chaque jour, les Aviateurs de l'Armée de l'Air et de l'Espace servent la France en protégeant, intervenant et dissuadant. Leur expertise fait voler nos avions, hélicoptères et drones, assurant la sécurité nationale. Passion et engagement au service de la nation. L'armée de l'",
                publicationDate: "2024-09-11T11:33:55.000Z",
                coordinates: "44.8572,-0.5874",
                city: "Bordeaux",
                postalCode: "33000",
                department: "Gironde",
                region: "Aquitaine",
                sector: "Informatique",
                jobtitle: "Analyste developpeur",
                company: "Armée De L'Air Et De L'Espace",
                contractType: ["CDD"],
                salary: ""
            },
            {
                id: "a7cda647f646f6987f3082c5589acd39",
                link: "https://www.jj-tracker.com/fr/redirect/offer/1017/a7cda647f646f6987f3082c5589acd39",
                title: "Technicien Développeur Informatique H/F",
                description:
                    "Chaque jour, les Aviateurs de l'Armée de l'Air et de l'Espace servent la France en protégeant, intervenant et dissuadant. Leur expertise fait voler nos avions, hélicoptères et drones, assurant la sécurité nationale. Passion et engagement au service de la nation. L'armée de l'",
                publicationDate: "2024-08-01T04:33:45.000Z",
                coordinates: "44.8572,-0.5874",
                city: "Bordeaux",
                postalCode: "33000",
                department: "Gironde",
                region: "Aquitaine",
                sector: "Industrie",
                jobtitle: "Technicien développeur",
                company: "Armée De L'Air Et De L'Espace",
                contractType: ["CDD"],
                salary: ""
            }
        ]
    }
}

describe("GET /jobs", () => {
    it("responds with a list of jobs", async () => {
        (login as jest.Mock).mockReturnValue(MOCK_TOKEN);
        (fetchJobs as jest.Mock).mockReturnValue(MOCK_JOBS_RESPONSE_OK)

        const response = await request(app.callback())
            .get("/jobs")
            .set("Accept", "application/json")

        expect(response.status).toEqual(200)
        expect(response.body).toEqual(MOCK_JOBS_RESPONSE_OK)
    })
})
