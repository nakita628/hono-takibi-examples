import { OpenAPIHono } from '@hono/zod-openapi'
import {
  cmcerHandler,
  cncerHandler,
  ctcerHandler,
  dmcerHandler,
  dpcerHandler,
  dscerHandler,
  fmcerHandler,
  idcerHandler,
  imcerHandler,
  incerHandler,
  lfcerHandler,
  lhcerHandler,
  locerHandler,
  mncerHandler,
  nrcerHandler,
  ntcerHandler,
  oscerHandler,
  pncerHandler,
  pscerHandler,
  rlcerHandler,
  rscerHandler,
  slcerHandler,
  vlcerHandler,
  wwcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', cmcerHandler)
  .route('/', cncerHandler)
  .route('/', ctcerHandler)
  .route('/', dmcerHandler)
  .route('/', dpcerHandler)
  .route('/', dscerHandler)
  .route('/', fmcerHandler)
  .route('/', idcerHandler)
  .route('/', imcerHandler)
  .route('/', incerHandler)
  .route('/', lfcerHandler)
  .route('/', lhcerHandler)
  .route('/', locerHandler)
  .route('/', mncerHandler)
  .route('/', nrcerHandler)
  .route('/', ntcerHandler)
  .route('/', oscerHandler)
  .route('/', pncerHandler)
  .route('/', pscerHandler)
  .route('/', rlcerHandler)
  .route('/', rscerHandler)
  .route('/', slcerHandler)
  .route('/', vlcerHandler)
  .route('/', wwcerHandler)

export default app
