type Address = {
  city?: string | undefined
  country?: string | undefined
  countryCode?: string | undefined
  geonameID?: number | undefined
  ipaddress?: string | undefined
  nationality?: string | undefined
  phoneNumber?: string | undefined
  state?: string | undefined
  streetAddress?: string | undefined
  zipCode?: string | undefined
}
type Person = {
  address?: Address | undefined
  age?: number | undefined
  bloodType?: string | undefined
  creditCardNumber?: string | undefined
  creditScore?: number | undefined
  dateOfBirth?: string | undefined
  email?: string | undefined
  eyeColor?: string | undefined
  gender?: string | undefined
  gpa?: number | undefined
  hasChildren?: boolean | undefined
  hasDegree?: boolean | undefined
  height?: number | undefined
  incomeInUSD?: number | undefined
  job?: string | undefined
  married?: boolean | undefined
  name?: string | undefined
  politicalLeaning?: number | undefined
  religion?: string | undefined
  username?: string | undefined
  weight?: number | undefined
}
type Lifestory = { lifestory?: string | undefined; person?: Person | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/address': { $get: { input: {}; output: Address; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/address/': { $get: { input: {}; output: Address; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/lifestory': { $get: { input: {}; output: Lifestory; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/lifestory/': { $get: { input: {}; output: Lifestory; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person': { $get: { input: {}; output: Person; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/': { $get: { input: {}; output: Person; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/age': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/age/': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/bloodtype': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/bloodtype/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/creditcardnumber': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/creditcardnumber/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/creditscore': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/creditscore/': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/email': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/email/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/eyecolor': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/eyecolor/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/gender': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/gender/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/gpa': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/gpa/': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/haschildren': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/haschildren/': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/hasdegree': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/hasdegree/': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/height': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/height/': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/income': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/income/': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/job': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/job/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/maritalstatus': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/maritalstatus/': {
      $get: { input: {}; output: boolean; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/name': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/name/': { $get: { input: {}; output: string; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/politicalleaning': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/politicalleaning/': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/religion': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/religion/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/username': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/username/': {
      $get: { input: {}; output: string; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/weight': { $get: { input: {}; output: number; outputFormat: 'text'; status: 200 } }
  } & {
    '/api/person/weight/': {
      $get: { input: {}; output: number; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/person/:number': {
      $get: {
        input: { param: { number: number } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/person/:number/': {
      $get: {
        input: { param: { number: number } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
