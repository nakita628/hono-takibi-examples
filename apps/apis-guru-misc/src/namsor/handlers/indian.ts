import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute,
  getApi2JsonSubclassificationIndianFirstNameLastNameRoute,
  postApi2JsonCastegroupIndianFullBatchRoute,
  postApi2JsonReligionIndianFullBatchRoute,
  postApi2JsonSubclassificationIndianBatchRoute,
} from '../routes'

const app = new OpenAPIHono()

export const indianHandler = app
  .openapi(getApi2JsonCastegroupIndianFullSubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonCastegroupIndianFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonReligionIndianFullSubDivisionIso31662PersonalNameFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonReligionIndianFullBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi2JsonSubclassificationIndianFirstNameLastNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi2JsonSubclassificationIndianBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
