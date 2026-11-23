import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePostReturnAddressesReturnAddressIdRoute,
  getPostDirectMailCampaignsRoute,
  getPostDirectMailLocationsSearchCountryQQueryRoute,
  getPostLettersHistoryExportFilenameFilenameRoute,
  getPostLettersHistoryRoute,
  getPostPostcardsExportFilenameFilenameRoute,
  getPostPostcardsHistoryRoute,
  getPostReturnAddressesReturnAddressIdRoute,
  getPostReturnAddressesRoute,
  postPostDirectMailCampaignsPriceRoute,
  postPostDirectMailCampaignsSendRoute,
  postPostLettersDetectAddressRoute,
  postPostLettersPriceRoute,
  postPostLettersSendRoute,
  postPostPostcardsPriceRoute,
  postPostPostcardsSendRoute,
  postPostReturnAddressesRoute,
  putPostReturnAddressesReturnAddressIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const postHandler = app
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
  .openapi(postPostLettersDetectAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostLettersHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostLettersHistoryExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostLettersPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostLettersSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostPostcardsExportFilenameFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostPostcardsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostPostcardsPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostPostcardsSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostReturnAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPostReturnAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPostReturnAddressesReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
