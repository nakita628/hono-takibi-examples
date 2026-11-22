import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCarDealerInventoryActiveRoute,
  getListingCarAuctionIdExtraRoute,
  getListingCarAuctionIdMediaRoute,
  getListingCarAuctionIdRoute,
  getListingCarFsboIdExtraRoute,
  getListingCarFsboIdMediaRoute,
  getListingCarFsboIdRoute,
  getListingCarIdExtraRoute,
  getListingCarIdMediaRoute,
  getListingCarIdRoute,
  getListingCarUkIdExtraRoute,
  getListingCarUkIdMediaRoute,
  getListingCarUkIdRoute,
  getSearchCarActiveRoute,
  getSearchCarAuctionActiveRoute,
  getSearchCarAutoCompleteRoute,
  getSearchCarFsboActiveRoute,
  getSearchCarRecentsRoute,
  getSearchCarUkActiveRoute,
  getSearchCarUkRecentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const carSearchHandler = app
  .openapi(getCarDealerInventoryActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarAuctionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarAuctionIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarAuctionIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarFsboIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarFsboIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarFsboIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarUkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarUkIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarUkIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingCarIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarAuctionActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarAutoCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarFsboActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarRecentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarUkActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSearchCarUkRecentsRoute, (c) => {
    throw new Error('Not implemented')
  })
