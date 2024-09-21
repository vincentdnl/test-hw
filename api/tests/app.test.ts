import request from "supertest"
import app from "../app"

describe('GET /jobs', () => {
    it('responds with a list of jobs', async () => {
        const response = await request(app.callback())
            .get('/jobs')
            .set('Accept', 'application/json')
        expect(response.status).toBe(200);
    })
})
