type Date = string
type MuseumDailyHours = { date: Date; timeOpen: string; timeClose: string }
type MuseumHours = MuseumDailyHours[]
type Error = { type?: string | undefined; title?: string | undefined }
type EventId = string
type EventName = string
type EventLocation = string
type EventDescription = string
type EventDates = Date[]
type EventPrice = number
type SpecialEvent = {
  eventId?: EventId | undefined
  name: EventName
  location: EventLocation
  eventDescription: EventDescription
  dates: EventDates
  price: EventPrice
}
type SpecialEventCollection = SpecialEvent[]
type SpecialEventFields = {
  name?: EventName | undefined
  location?: EventLocation | undefined
  eventDescription?: EventDescription | undefined
  dates?: EventDates | undefined
  price?: EventPrice | undefined
}
type Email = string
type TicketId = string
type TicketType = 'event' | 'general'
type BuyMuseumTickets = {
  email?: Email | undefined
  ticketId?: TicketId | undefined
  ticketDate: Date
  ticketType: TicketType
  eventId?: EventId | undefined
}
type TicketMessage = string
type TicketConfirmation = string
type MuseumTicketsConfirmation = {
  ticketId?: TicketId | undefined
  ticketDate: Date
  ticketType: TicketType
  eventId?: EventId | undefined
  message: TicketMessage
  confirmationCode: TicketConfirmation
}
type TicketCodeImage = File
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/museum-hours': {
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: MuseumHours
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/special-events': {
      $post:
        | { input: { json: SpecialEvent }; output: SpecialEvent; outputFormat: 'json'; status: 201 }
        | { input: { json: SpecialEvent }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: SpecialEvent }; output: Error; outputFormat: 'json'; status: 404 }
      $get:
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: SpecialEventCollection
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                startDate?: string | undefined
                endDate?: string | undefined
                page?: number | undefined
                limit?: number | undefined
              }
            }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/special-events/:eventId': {
      $get:
        | {
            input: { param: { eventId: string } }
            output: SpecialEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { eventId: string } } & { json: SpecialEventFields }
            output: SpecialEvent
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { eventId: string } } & { json: SpecialEventFields }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } } & { json: SpecialEventFields }
            output: Error
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | { input: { param: { eventId: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { eventId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tickets': {
      $post:
        | {
            input: { json: BuyMuseumTickets }
            output: MuseumTicketsConfirmation
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: BuyMuseumTickets }; output: Error; outputFormat: 'json'; status: 400 }
        | { input: { json: BuyMuseumTickets }; output: Error; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/tickets/:ticketId/qr': {
      $get:
        | {
            input: { param: { ticketId: string } }
            output: TicketCodeImage
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { ticketId: string } }
            output: Error
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { ticketId: string } }
            output: Error
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
