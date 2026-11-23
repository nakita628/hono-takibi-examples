import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getNominationCongressNominationNumberActionsRoute,
  getNominationCongressNominationNumberCommitteesRoute,
  getNominationCongressNominationNumberHearingsRoute,
  getNominationCongressNominationNumberOrdinalRoute,
  getNominationCongressNominationNumberRoute,
  getNominationCongressRoute,
  getNominationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nominationHandler = app
  .openapi(getNominationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressNominationNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressNominationNumberOrdinalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressNominationNumberActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressNominationNumberCommitteesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNominationCongressNominationNumberHearingsRoute, (c) => {
    throw new Error('Not implemented')
  })
