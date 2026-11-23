import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCandidatesIndexRoute,
  getCandidatesSearchIndexRoute,
  getCandidatesTotalsAggregatesIndexRoute,
  getCandidatesTotalsByOfficeByPartyIndexRoute,
  getCandidatesTotalsByOfficeIndexRoute,
  getCandidatesTotalsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const candidatesHandler = app
  .openapi(getCandidatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesSearchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsByOfficeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCandidatesTotalsByOfficeByPartyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
