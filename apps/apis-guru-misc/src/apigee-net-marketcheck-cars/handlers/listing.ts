import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  getListingHeavyEquipmentIdExtraRoute,
  getListingHeavyEquipmentIdMediaRoute,
  getListingHeavyEquipmentIdRoute,
  getListingMotorcycleIdExtraRoute,
  getListingMotorcycleIdMediaRoute,
  getListingMotorcycleIdRoute,
  getListingRvIdExtraRoute,
  getListingRvIdMediaRoute,
  getListingRvIdRoute,
  getListingRvUkIdExtraRoute,
  getListingRvUkIdMediaRoute,
  getListingRvUkIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const listingHandler = app
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
  .openapi(getListingHeavyEquipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingHeavyEquipmentIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingHeavyEquipmentIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingMotorcycleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingMotorcycleIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingMotorcycleIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvUkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvUkIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvUkIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdExtraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getListingRvIdMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
