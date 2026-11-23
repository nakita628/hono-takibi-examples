import { OpenAPIHono } from '@hono/zod-openapi'
import {
  hpcerHandler,
  hscerHandler,
  hsmgrHandler,
  nchscHandler,
  nctscHandler,
  nsescHandler,
  nstscHandler,
  ntltrHandler,
  ntmksHandler,
  skhscHandler,
  sktscHandler,
  spcerHandler,
  sscerHandler,
  ssmgrHandler,
  tetcrHandler,
  tetmsHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', hpcerHandler)
  .route('/', hscerHandler)
  .route('/', hsmgrHandler)
  .route('/', nchscHandler)
  .route('/', nctscHandler)
  .route('/', nsescHandler)
  .route('/', nstscHandler)
  .route('/', ntltrHandler)
  .route('/', ntmksHandler)
  .route('/', skhscHandler)
  .route('/', sktscHandler)
  .route('/', spcerHandler)
  .route('/', sscerHandler)
  .route('/', ssmgrHandler)
  .route('/', tetcrHandler)
  .route('/', tetmsHandler)

export default app
