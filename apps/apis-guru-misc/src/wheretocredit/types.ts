type Segment = {
  bookingClass: string
  carrier: string
  departure?: (string | null) | undefined
  destination: string
  distance?: (number | null) | undefined
  flightNumber?: (number | null) | undefined
  operatingCarrier?: (string | null) | undefined
  origin: string
}
type Itinerary = {
  baseFareUSD?: number | undefined
  id?: (string | null) | undefined
  segments: Segment[]
  ticketingCarrier?: (string | null) | undefined
}
type CalculateItineraryProgramResult = {
  airlines?: (string[] | null) | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  revenueBased?: boolean | undefined
  unpublished?: boolean | undefined
  value?: number | undefined
}
type CalculateItineraryResult = {
  id?: (string | null) | undefined
  totals?: (CalculateItineraryProgramResult[] | null) | undefined
}
type CalculateResult = {
  errorMessage?: (string | null) | undefined
  success?: boolean | undefined
  value?: CalculateItineraryResult | undefined
}
type Program = {
  airlines?: (string[] | null) | undefined
  denomination?: (string | null) | undefined
  fullName?: (string | null) | undefined
  id?: (string | null) | undefined
  programName?: (string | null) | undefined
  tierNames?: (string[] | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/1.0/calculate': {
      $post:
        | {
            input: { json: Itinerary[] | null }
            output: CalculateResult[]
            outputFormat: 'json'
            status: 200
          }
        | { input: { json: Itinerary[] | null }; output: {}; outputFormat: string; status: 429 }
    }
  } & {
    '/api/1.0/programs': {
      $get:
        | { input: {}; output: Program[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: {}; outputFormat: string; status: 429 }
    }
  },
  '/'
>
export default routes
