type Part = {
  includeInMultiple: boolean
  priceDen: number
  priceNum: number
  priceType: number
  selectionId: number
}
type Leg = { parts: Part[]; sort?: string | undefined; type: string }
type Bet = {
  delayedBetId?: string | undefined
  freeBetId?: string | undefined
  legs: Leg[]
  number: number
  stake: number
  typeCode: string
}
type ComplexBetRequestBody = { bets?: Bet[] | undefined }
type BetPlaced = {
  id?: string | undefined
  numLines?: number | undefined
  number?: number | undefined
  placedDateTime?: string | undefined
  receipt: string
  totalStake?: number | undefined
}
type BetPlacedResponse = BetPlaced[]
type BetDelayed = {
  delayPeriodSeconds: number
  delayedBetId: string
  id: string
  number?: number | undefined
}
type BetDelayedResponse = BetDelayed[]
type Solution = {
  betNum?: string | undefined
  eventId?: string | undefined
  handicap?: string | undefined
  handicapPrecision?: string | undefined
  priceDen?: string | undefined
  priceNum?: string | undefined
  selectionHandicap?: string | undefined
  selectionId?: string | undefined
}
type Error = {
  code?: string | undefined
  field?: string | undefined
  message?: string | undefined
  solution?: Solution | undefined
}
type Errors = { errors?: Error[] | undefined }
type SingleBetRequestBody = {
  delayedBetId?: string | undefined
  freeBetId?: string | undefined
  priceDen?: number | undefined
  priceNum?: number | undefined
  priceType: string
  selectionId: string
  stake: number
  type: string
}
type BetSlipRequest = { legs?: Leg[] | undefined }
type FreeBetDetail = {
  awardDateTime?: string | undefined
  displayText?: string | undefined
  expiryDateTime?: string | undefined
  id: number
  offerDesc?: string | undefined
  offerId?: number | undefined
  offerName: string
  startDateTime?: string | undefined
  value: number
}
type Betslippart = {
  eachWayAvailable?: boolean | undefined
  includeInMultiple: boolean
  legGroup?: number | undefined
  priceChanged?: boolean | undefined
  priceDen: number
  priceNum: number
  priceType: number
  selectionId: number
  singleAvailable?: boolean | undefined
  startingPriceAvailable?: boolean | undefined
  status?: string | undefined
  statusChanged?: boolean | undefined
}
type Betslipleg = { parts: Betslippart[]; sort?: string | undefined; type: string }
type Betslipbet = {
  betMultiplier?: number | undefined
  freeBets?: FreeBetDetail[] | undefined
  legs: Betslipleg[]
  maxStake?: number | undefined
  minStake?: number | undefined
  numLines?: number | undefined
  number: number
  typeCode: string
  typeName?: string | undefined
}
type BetSlipResponse = { betslip?: Betslipbet[] | undefined }
type FreeBet = FreeBetDetail[]
type PriceFormatted = {
  american?: string | undefined
  decimal?: number | undefined
  fractional?: string | undefined
}
type PlacedBetPart = {
  description: string
  eachWayDen?: number | undefined
  eachWayNum?: number | undefined
  eachWayPlaces?: number | undefined
  eventDescription: string
  eventId: string
  eventMarketDescription?: string | undefined
  eventTypeDescription?: string | undefined
  handicap?: number | undefined
  number: number
  priceDen: number
  priceFormatted?: PriceFormatted | undefined
  priceNum: number
  priceType: string
  result: string
  rule4Deductions?: number | undefined
  selectionId?: string | undefined
  startDateTime: string
}
type PlacedBetLeg = {
  number: number
  parts: PlacedBetPart[]
  sort?: string | undefined
  type: string
}
type PlacedBet = {
  cashinValue?: number | undefined
  estimatedReturns: number
  freeBetValue?: number | undefined
  id: string
  legs?: PlacedBetLeg[] | undefined
  numLines?: number | undefined
  numSelections?: number | undefined
  receipt?: string | undefined
  settled: boolean
  stake: number
  stakePerLine?: number | undefined
  status: string
  transDateTime: string
  typeCode: string
  typeName: string
  winnings: number
}
type HistoryBets = PlacedBet[]
type BetHistoryResponse = { bets?: HistoryBets | undefined }
type CashInResponse = { success: boolean }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/bet/complex': {
      $post:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: ComplexBetRequestBody
            }
            output: BetPlacedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: ComplexBetRequestBody
            }
            output: BetDelayedResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: ComplexBetRequestBody
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/bet/single': {
      $post:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: SingleBetRequestBody
            }
            output: BetPlacedResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: SingleBetRequestBody
            }
            output: BetDelayedResponse
            outputFormat: 'json'
            status: 202
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } } & {
              json: SingleBetRequestBody
            }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/betslips': {
      $post: {
        input: { query: { expanded?: string | undefined } } & {
          header: { apiKey: string; apiSecret: string }
        } & { json: BetSlipRequest }
        output: BetSlipResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/freebets': {
      $get:
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: FreeBet
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: {}
            outputFormat: string
            status: 204
          }
    }
  } & {
    '/history': {
      $get:
        | {
            input: {
              query: {
                dateFrom: string
                dateTo: string
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                settled?: boolean | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: BetHistoryResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                dateFrom: string
                dateTo: string
                fields?: string[] | undefined
                include?: string[] | undefined
                exclude?: string[] | undefined
                page?: number | undefined
                pageSize?: number | undefined
                sort?: string | undefined
                settled?: boolean | undefined
              }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: Errors
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/:betId/cashin': {
      $put:
        | {
            input: { param: { betId: string } } & {
              query: { cashInValue: number; cashinBetDelayId: string }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: CashInResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { betId: string } } & {
              query: { cashInValue: number; cashinBetDelayId: string }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: Errors
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { betId: string } } & {
              query: { cashInValue: number; cashinBetDelayId: string }
            } & { header: { apiKey: string; apiSecret: string; apiTicket: string } }
            output: Errors
            outputFormat: 'json'
            status: 409
          }
    }
  },
  '/'
>
export default routes
