import { OpenAPIHono } from '@hono/zod-openapi'
import {
  patchProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReferenceRoute,
  postProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReferenceSendresponsemessagebymessagereferenceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollTaxReturnByMessageReferenceHandler = app
  .openapi(
    patchProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersPayrolladministrationsPayrolltaxreturnsMessageReferenceSendresponsemessagebymessagereferenceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
