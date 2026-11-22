import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPostDirectMailCampaignsRoute,
  getPostDirectMailLocationsSearchCountryQQueryRoute,
  postPostDirectMailCampaignsPriceRoute,
  postPostDirectMailCampaignsSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postDirectMailHandler = app
  .openapi(getPostDirectMailCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostDirectMailCampaignsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostDirectMailCampaignsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostDirectMailLocationsSearchCountryQQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
