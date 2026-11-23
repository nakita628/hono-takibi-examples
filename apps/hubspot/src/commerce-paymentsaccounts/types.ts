type PaymentAccountView = {
  canPayout: boolean
  canTransact: boolean
  createdAt?: string | undefined
  eligibleProcessorTypes: ('NOT_ENROLLED' | 'HS_PAYMENTS' | 'BYO_STRIPE')[]
  enrollmentState:
    | 'ACTIVE'
    | 'DISCONNECTED'
    | 'IN_PROGRESS'
    | 'IN_UNDERWRITING'
    | 'NOT_STARTED'
    | 'OPTED_OUT'
    | 'REJECTED'
    | 'SUSPENDED'
  hasTransacted: boolean
  id: string
  lastTransactedAt?: string | undefined
  processorType: 'BYO_STRIPE' | 'HS_PAYMENTS' | 'NOT_ENROLLED'
  updatedAt?: string | undefined
}
type ErrorDetail = {
  code?: string | undefined
  context?: { [x: string]: string[] } | undefined
  in?: string | undefined
  message: string
  subCategory?: string | undefined
}
type Error = {
  category: string
  context?: { [x: string]: string[] } | undefined
  correlationId: string
  errors?: ErrorDetail[] | undefined
  links?: { [x: string]: string } | undefined
  message: string
  subCategory?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/commerce/payment-accounts/2026-09/status': {
      $get:
        | { input: {}; output: PaymentAccountView; outputFormat: 'json'; status: 200 }
        | { input: {}; output: Error; outputFormat: 'text'; status: 200 }
    }
  },
  '/'
>
export default routes
