import { OpenAPIHono } from '@hono/zod-openapi'
import {
  aecmwHandler,
  aemtwHandler,
  agcerHandler,
  alimwHandler,
  arcmwHandler,
  armtwHandler,
  bacerHandler,
  bhcerHandler,
  bpcrdHandler,
  btcerHandler,
  cecerHandler,
  chcerHandler,
  clcerHandler,
  coprgHandler,
  dccerHandler,
  dmcerHandler,
  dpicrHandler,
  dtcerHandler,
  ercerHandler,
  ffcerHandler,
  igcerHandler,
  incerHandler,
  lhcerHandler,
  mncerHandler,
  mnrgaHandler,
  obcerHandler,
  racerHandler,
  rmcerHandler,
  secerHandler,
  shcerHandler,
  sicrdHandler,
  srcerHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', aecmwHandler)
  .route('/', aemtwHandler)
  .route('/', agcerHandler)
  .route('/', alimwHandler)
  .route('/', arcmwHandler)
  .route('/', armtwHandler)
  .route('/', bacerHandler)
  .route('/', bhcerHandler)
  .route('/', bpcrdHandler)
  .route('/', btcerHandler)
  .route('/', cecerHandler)
  .route('/', chcerHandler)
  .route('/', clcerHandler)
  .route('/', coprgHandler)
  .route('/', dccerHandler)
  .route('/', dmcerHandler)
  .route('/', dpicrHandler)
  .route('/', dtcerHandler)
  .route('/', ercerHandler)
  .route('/', ffcerHandler)
  .route('/', igcerHandler)
  .route('/', incerHandler)
  .route('/', lhcerHandler)
  .route('/', mncerHandler)
  .route('/', mnrgaHandler)
  .route('/', obcerHandler)
  .route('/', racerHandler)
  .route('/', rmcerHandler)
  .route('/', secerHandler)
  .route('/', shcerHandler)
  .route('/', sicrdHandler)
  .route('/', srcerHandler)

export default app
