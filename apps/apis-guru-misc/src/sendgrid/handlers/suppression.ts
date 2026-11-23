import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSuppressionBlocksEmailRoute,
  deleteSuppressionBlocksRoute,
  deleteSuppressionBouncesEmailRoute,
  deleteSuppressionBouncesRoute,
  deleteSuppressionInvalidEmailsEmailRoute,
  deleteSuppressionInvalidEmailsRoute,
  deleteSuppressionSpamReportsEmailRoute,
  deleteSuppressionSpamReportsRoute,
  getSuppressionBlocksEmailRoute,
  getSuppressionBlocksRoute,
  getSuppressionBouncesEmailRoute,
  getSuppressionBouncesRoute,
  getSuppressionInvalidEmailsEmailRoute,
  getSuppressionInvalidEmailsRoute,
  getSuppressionSpamReportsEmailRoute,
  getSuppressionSpamReportsRoute,
  getSuppressionUnsubscribesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const suppressionHandler = app
  .openapi(deleteSuppressionBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBlocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionBlocksEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBlocksEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBouncesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionBouncesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionBouncesEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionInvalidEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionInvalidEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionInvalidEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionInvalidEmailsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionSpamReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionSpamReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSuppressionSpamReportsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionSpamReportsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSuppressionUnsubscribesRoute, (c) => {
    throw new Error('Not implemented')
  })
