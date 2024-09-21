import {JobCard} from "./index.tsx"
import {render} from "@testing-library/react"

test("Renders JobCard", () => {
    const TEST_JOB_AD =
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
        }

    const {asFragment} = render(<JobCard {...TEST_JOB_AD}/>)
    expect(asFragment()).toMatchSnapshot()
})
