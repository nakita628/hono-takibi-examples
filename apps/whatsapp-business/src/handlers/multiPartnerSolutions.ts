import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionApplicationIDWhatsappBusinessSolutionsRoute,
  getVersionSolutionIDAccessTokenRoute,
  getVersionSolutionIDRoute,
  getVersionWABAIDSolutionsRoute,
  postVersionApplicationIDWhatsappBusinessSolutionRoute,
  postVersionSolutionIDAcceptRoute,
  postVersionSolutionIDRejectDeactivationRequestRoute,
  postVersionSolutionIDRejectRoute,
  postVersionSolutionIDSendDeactivationRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const multiPartnerSolutionsHandler = app
  .openapi(postVersionApplicationIDWhatsappBusinessSolutionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionApplicationIDWhatsappBusinessSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionSolutionIDAccessTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionSolutionIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDRejectDeactivationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionSolutionIDSendDeactivationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionWABAIDSolutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
