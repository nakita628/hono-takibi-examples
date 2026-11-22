import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
  getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
} from '../routes'

const app = new OpenAPIHono()

export const travelTimeHandler = app
  .openapi(
    getTravelTimesCompareOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getTravelTimesOverlayZMapcenterMapCenterLatMapCenterLonPinlocationPinLatPinLonDimensionsWidthHeightRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
