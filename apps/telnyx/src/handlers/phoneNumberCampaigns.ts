import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete10dlcPhoneNumberCampaignsPhoneNumberRoute,
  get10dlcPhoneNumberCampaignsPhoneNumberRoute,
  get10dlcPhoneNumberCampaignsRoute,
  post10dlcPhoneNumberCampaignsRoute,
  put10dlcPhoneNumberCampaignsPhoneNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const phoneNumberCampaignsHandler = app
  .openapi(get10dlcPhoneNumberCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post10dlcPhoneNumberCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete10dlcPhoneNumberCampaignsPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get10dlcPhoneNumberCampaignsPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(put10dlcPhoneNumberCampaignsPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
