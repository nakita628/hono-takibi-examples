declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/creditcontrol/accounts': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          data: {
            account: string
            balance: number
            creditLimit: number
            description: string
            document: string
            documentType: string
            email: string
            lastUpdate: string
          }[]
          summary: { count: number }
        }
        outputFormat: 'text'
        status: 200
      }
      $post: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            creditLimit: string
            description: string
            document: string
            documentType: string
            email: string
            tolerance: string
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:accountId': {
      $put: {
        input: { param: { accountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            creditLimit?: number | undefined
            document?: string | undefined
            email: string
            id: string
          }
        }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId': {
      $delete: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: {
            document?: string | undefined
            documentType?: string | undefined
            email?: string | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { creditAccountId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          account: string
          balance: number
          creditLimit: number
          description: string
          email: string
          lastUpdate: string
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { description: string; email: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/creditlimit': {
      $put: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: number } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/holders': {
      $post: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { claims: { email: string } } }
        output: {
          data: {
            account: string
            balance: number
            creditLimit: number
            description: string
            document: string
            documentType: string
            email: string
            lastUpdate: string
          }[]
          summary: { count: number }
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/holders/:holderId': {
      $delete: {
        input: { param: { creditAccountId: string; holderId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          data: {
            account: string
            balance: number
            creditLimit: number
            description: string
            document: string
            documentType: string
            email: string
            lastUpdate: string
          }[]
          summary: { count: number }
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/invoices': {
      $get: {
        input: { param: { creditAccountId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          data: {
            checkingAccountId: string
            createdAt: string
            description: string
            dueDate: string
            id: string
            observation: string
            originalDueDate: string
            paymentLink: string
            status: string
            updatedAt: string
            value: number
          }[]
          summary: { count: number; total: number }
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId': {
      $delete: {
        input: { param: { creditAccountId: string; invoiceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
      $get: {
        input: { param: { creditAccountId: string; invoiceId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          checkingAccountId: string
          createdAt: string
          description: string
          dueDate: string
          id: string
          observation: string
          originalDueDate: string
          paymentLink: string
          status: string
          updatedAt: string
          value: number
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { param: { creditAccountId: string; invoiceId: string } } & {
          query: { friendlyId?: string | undefined }
        } & { header: { Accept: string; 'Content-Type': string } } & {
          json: { observation: string; paymentLink: string; status: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/payments': {
      $post: {
        input: { param: { creditAccountId: string; invoiceId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: string } }
        output: string
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/invoices/:invoiceId/postponement': {
      $put: {
        input: { param: { creditAccountId: string; invoiceId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { dueDays: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/statements': {
      $get: {
        input: { param: { creditAccountId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          currentBalance: number
          intervalBalance: number
          previousBalance: number
          statements: { date: string; description: string; value: number }[]
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/statements/:statementId': {
      $put: {
        input: { param: { creditAccountId: string; statementId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/tolerance': {
      $put: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: number } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/transaction': {
      $post: {
        input: { param: { creditAccountId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: { expirationDate: string; installments: string; settle: boolean; value: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId': {
      $delete: {
        input: { param: { creditAccountId: string; transactionId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { creditAccountId: string; transactionId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & {
          json: { expirationDate: string; installments: string; settle: boolean; value: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/refunds': {
      $post: {
        input: { param: { creditAccountId: string; transactionId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: string } }
        output: { id: string; value: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/accounts/:creditAccountId/transactions/:transactionId/settlement': {
      $put: {
        input: { param: { creditAccountId: string; transactionId: string } } & {
          header: { Accept: string; 'Content-Type': string }
        } & { json: { value: string } }
        output: { id: string; value: number }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/invoices': {
      $get: {
        input: {
          query: {
            from?: string | undefined
            to?: string | undefined
            createdDateFrom?: string | undefined
            createdDateTo?: string | undefined
            value?: number | undefined
            status?: string | undefined
            friendlyId?: string | undefined
            creditAccountId?: string | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          data: {
            checkingAccountId: string
            createdAt: string
            description: string
            dueDate: string
            id: string
            observation: string | null
            originalDueDate: string
            paymentLink: string | null
            status: string
            updatedAt: string
            value: number
          }[]
          summary: { count: number; total: number }
        }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/api/creditcontrol/storeconfig': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          dailyInterestRate: number
          invoicePostponementLimit: number
          taxRate: number
          tolerancePercent: number
        }
        outputFormat: 'text'
        status: 200
      }
      $put: {
        input: { header: { Accept: string; 'Content-Type': string } } & {
          json: {
            automaticCheckingAccountCreationEnabled: boolean
            dailyInterestRate: string
            defaultCreditValue: string
            invoicePostponementLimit: string
            maxPostponementDays: string
            maxPreAuthorizationGrowthRate: string
            myCreditsEnabled: boolean
            notificationsSettings?:
              | {
                  daysAfter?: { days: number; timeOfDay: string }[] | undefined
                  daysPrior?: { days: number; timeOfDay: string }[] | undefined
                }
              | undefined
            postponementEnabled: boolean
            taxRate: string
            toleranceEnabled: boolean
          }
        }
        output: {
          dailyInterestRate: number
          invoicePostponementLimit: number
          taxRate: number
          tolerancePercent: number
        }
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
