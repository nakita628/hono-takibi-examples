import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete10dlcBrandBrandIdRoute,
  get10dlcBrandBrandIdExternalVettingRoute,
  get10dlcBrandBrandIdRoute,
  get10dlcBrandBrandIdSmsOtpRoute,
  get10dlcBrandFeedbackBrandId2Route,
  get10dlcBrandFeedbackBrandIdRoute,
  get10dlcBrandRoute,
  get10dlcBrandSmsOtpReferenceIdRoute,
  post10dlcBrandBrandId2faEmailRoute,
  post10dlcBrandBrandIdExternalVettingRoute,
  post10dlcBrandBrandIdSmsOtpRoute,
  post10dlcBrandRoute,
  put10dlcBrandBrandIdExternalVettingRoute,
  put10dlcBrandBrandIdRevetRoute,
  put10dlcBrandBrandIdRoute,
  put10dlcBrandBrandIdSmsOtpRoute,
} from '../routes'

const app = new OpenAPIHono()

export const brandsHandler = app
  .openapi(get10dlcBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcBrandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandFeedbackBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandSmsOtpReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete10dlcBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcBrandBrandIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcBrandBrandId2faEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandBrandIdExternalVettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcBrandBrandIdExternalVettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcBrandBrandIdExternalVettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcBrandBrandIdRevetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandBrandIdSmsOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcBrandBrandIdSmsOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcBrandBrandIdSmsOtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcBrandFeedbackBrandId2Route, (c) => {
    throw new Error('Not implemented')
  })
