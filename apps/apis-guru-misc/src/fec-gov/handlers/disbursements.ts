import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSchedulesScheduleBByPurposeIndexRoute,
  getSchedulesScheduleBByRecipientIdIndexRoute,
  getSchedulesScheduleBByRecipientIndexRoute,
  getSchedulesScheduleBEfileIndexRoute,
  getSchedulesScheduleBIndexRoute,
  getSchedulesScheduleBSubIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const disbursementsHandler = app
  .openapi(getSchedulesScheduleBIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByPurposeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByRecipientIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBByRecipientIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBEfileIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchedulesScheduleBSubIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
