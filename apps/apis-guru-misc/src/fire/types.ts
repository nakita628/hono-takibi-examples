declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/v1/accounts': {
      $get:
        | {
            input: {}
            output: {
              accounts?:
                | {
                    balance?: bigint | undefined
                    cbic?: string | undefined
                    ccan?: string | undefined
                    ciban?: string | undefined
                    cnsc?: string | undefined
                    colour?: string | undefined
                    currency?:
                      | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                      | undefined
                    defaultAccount?: boolean | undefined
                    directDebitsAllowed?: boolean | undefined
                    fopOnly?: boolean | undefined
                    ican?: bigint | undefined
                    name?: string | undefined
                    status?: 'LIVE' | 'BREXIT_MIGRATED' | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
      $post: {
        input: {
          json: {
            acceptFeesAndCharges?: boolean | undefined
            accountName?: string | undefined
            currency?: 'EUR' | 'GBP' | undefined
          }
        }
        output: {
          balance?: bigint | undefined
          cbic?: string | undefined
          ccan?: string | undefined
          ciban?: string | undefined
          cnsc?: string | undefined
          colour?: string | undefined
          currency?:
            | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
            | undefined
          defaultAccount?: boolean | undefined
          directDebitsAllowed?: boolean | undefined
          fopOnly?: boolean | undefined
          ican?: bigint | undefined
          name?: string | undefined
          status?: 'LIVE' | 'BREXIT_MIGRATED' | undefined
        }
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/v1/accounts/:ican': {
      $get:
        | {
            input: { param: { ican: bigint } }
            output: {
              balance?: bigint | undefined
              cbic?: string | undefined
              ccan?: string | undefined
              ciban?: string | undefined
              cnsc?: string | undefined
              colour?: string | undefined
              currency?:
                | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                | undefined
              defaultAccount?: boolean | undefined
              directDebitsAllowed?: boolean | undefined
              fopOnly?: boolean | undefined
              ican?: bigint | undefined
              name?: string | undefined
              status?: 'LIVE' | 'BREXIT_MIGRATED' | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: { param: { ican: bigint } }; output: {}; outputFormat: string; status: 401 }
    }
  } & {
    '/v1/accounts/:ican/transactions': {
      $get: {
        input: { param: { ican: bigint } } & { query: { limit: bigint; offset: bigint } }
        output: {
          dateRangeTo?: number | undefined
          total?: number | undefined
          transactions?:
            | {
                amountAfterCharges?: bigint | undefined
                amountBeforeCharges?: bigint | undefined
                balance?: bigint | undefined
                batchItemDetails?:
                  | {
                      batchItemPublicUuid?: string | undefined
                      batchName?: string | undefined
                      batchPublicUuid?: string | undefined
                      jobNumber?: string | undefined
                    }
                  | undefined
                card?:
                  | {
                      alias?: string | undefined
                      cardId?: bigint | undefined
                      embossBusinessName?: string | undefined
                      embossCardName?: string | undefined
                      expiryDate?: string | undefined
                      maskedPan?: string | undefined
                      provider?: string | undefined
                    }
                  | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                date?: string | undefined
                dateAcknowledged?: string | undefined
                directDebitDetails?:
                  | {
                      directDebitReference?: string | undefined
                      directDebitUuid?: string | undefined
                      mandateReference?: string | undefined
                      mandateUUid?: string | undefined
                      mandateUuid?: string | undefined
                      originatorAlias?: string | undefined
                      originatorLogoUrlLarge?: string | undefined
                      originatorLogoUrlSmall?: string | undefined
                      originatorName?: string | undefined
                      originatorReference?: string | undefined
                    }
                  | undefined
                eventUuid?: string | undefined
                feeAmount?: bigint | undefined
                fxTradeDetails?:
                  | {
                      buyAmount?: bigint | undefined
                      buyCurrency?: string | undefined
                      fixedSide?: string | undefined
                      provider?: string | undefined
                      rate4d?: bigint | undefined
                      sellAmount?: bigint | undefined
                      sellCurrency?: string | undefined
                    }
                  | undefined
                ican?: bigint | undefined
                myRef?: string | undefined
                paymentRequestPublicCode?: string | undefined
                proprietarySchemeDetails?:
                  | { data?: string | undefined; type?: string | undefined }[]
                  | undefined
                refId?: bigint | undefined
                relatedParty?:
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'FIRE_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'EXTERNAL_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'WITHDRAWAL_ACCOUNT' | undefined
                    }
                  | {
                      cardMerchant?:
                        | {
                            acquirerIdDe32?: string | undefined
                            additionalAmtDe54?: string | undefined
                            additionalDataDe124?: string | undefined
                            additionalDataDe48?: string | undefined
                            authCodeDe38?: string | undefined
                            authorisedByGps?: string | undefined
                            avsResult?: string | undefined
                            billAmt?: bigint | undefined
                            billCcy?: string | undefined
                            expiryDate?: string | undefined
                            mccCode?: string | undefined
                            merchIdDe42?: string | undefined
                            merchNameDe43?: string | undefined
                            mtId?: string | undefined
                            posDataDe22?: string | undefined
                            posDataDe61?: string | undefined
                            posTermnlDe41?: string | undefined
                            procCode?: string | undefined
                            recordDataDe120?: string | undefined
                            respCodeDe39?: string | undefined
                            retRefNoDe37?: string | undefined
                            statusCode?: string | undefined
                            token?: string | undefined
                            txnAmt4d?: bigint | undefined
                            txnCcy?: string | undefined
                            txnCtry?: string | undefined
                            txnDesc?: string | undefined
                            txnStatCode?: string | undefined
                            txnType?: string | undefined
                          }
                        | undefined
                      type?: 'CARD_MERCHANT' | 'CARD_ATM' | undefined
                    }
                  | undefined
                taxAmount?: bigint | undefined
                txnId?: bigint | undefined
                type?: string | undefined
                yourRef?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/accounts/:ican/transactions/filter': {
      $get: {
        input: { param: { ican: bigint } } & {
          query: {
            dateRangeFrom: bigint
            dateRangeTo: bigint
            searchKeyword: string
            transactionTypes: string[]
            offset: bigint
          }
        }
        output: {
          dateRangeTo?: number | undefined
          total?: number | undefined
          transactions?:
            | {
                amountAfterCharges?: bigint | undefined
                amountBeforeCharges?: bigint | undefined
                balance?: bigint | undefined
                batchItemDetails?:
                  | {
                      batchItemPublicUuid?: string | undefined
                      batchName?: string | undefined
                      batchPublicUuid?: string | undefined
                      jobNumber?: string | undefined
                    }
                  | undefined
                card?:
                  | {
                      alias?: string | undefined
                      cardId?: bigint | undefined
                      embossBusinessName?: string | undefined
                      embossCardName?: string | undefined
                      expiryDate?: string | undefined
                      maskedPan?: string | undefined
                      provider?: string | undefined
                    }
                  | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                date?: string | undefined
                dateAcknowledged?: string | undefined
                directDebitDetails?:
                  | {
                      directDebitReference?: string | undefined
                      directDebitUuid?: string | undefined
                      mandateReference?: string | undefined
                      mandateUUid?: string | undefined
                      mandateUuid?: string | undefined
                      originatorAlias?: string | undefined
                      originatorLogoUrlLarge?: string | undefined
                      originatorLogoUrlSmall?: string | undefined
                      originatorName?: string | undefined
                      originatorReference?: string | undefined
                    }
                  | undefined
                eventUuid?: string | undefined
                feeAmount?: bigint | undefined
                fxTradeDetails?:
                  | {
                      buyAmount?: bigint | undefined
                      buyCurrency?: string | undefined
                      fixedSide?: string | undefined
                      provider?: string | undefined
                      rate4d?: bigint | undefined
                      sellAmount?: bigint | undefined
                      sellCurrency?: string | undefined
                    }
                  | undefined
                ican?: bigint | undefined
                myRef?: string | undefined
                paymentRequestPublicCode?: string | undefined
                proprietarySchemeDetails?:
                  | { data?: string | undefined; type?: string | undefined }[]
                  | undefined
                refId?: bigint | undefined
                relatedParty?:
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'FIRE_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'EXTERNAL_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'WITHDRAWAL_ACCOUNT' | undefined
                    }
                  | {
                      cardMerchant?:
                        | {
                            acquirerIdDe32?: string | undefined
                            additionalAmtDe54?: string | undefined
                            additionalDataDe124?: string | undefined
                            additionalDataDe48?: string | undefined
                            authCodeDe38?: string | undefined
                            authorisedByGps?: string | undefined
                            avsResult?: string | undefined
                            billAmt?: bigint | undefined
                            billCcy?: string | undefined
                            expiryDate?: string | undefined
                            mccCode?: string | undefined
                            merchIdDe42?: string | undefined
                            merchNameDe43?: string | undefined
                            mtId?: string | undefined
                            posDataDe22?: string | undefined
                            posDataDe61?: string | undefined
                            posTermnlDe41?: string | undefined
                            procCode?: string | undefined
                            recordDataDe120?: string | undefined
                            respCodeDe39?: string | undefined
                            retRefNoDe37?: string | undefined
                            statusCode?: string | undefined
                            token?: string | undefined
                            txnAmt4d?: bigint | undefined
                            txnCcy?: string | undefined
                            txnCtry?: string | undefined
                            txnDesc?: string | undefined
                            txnStatCode?: string | undefined
                            txnType?: string | undefined
                          }
                        | undefined
                      type?: 'CARD_MERCHANT' | 'CARD_ATM' | undefined
                    }
                  | undefined
                taxAmount?: bigint | undefined
                txnId?: bigint | undefined
                type?: string | undefined
                yourRef?: string | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps': {
      $post: {
        input: {
          json: {
            applicationName?: string | undefined
            enabled?: boolean | undefined
            expiry?: string | undefined
            ican?: bigint | undefined
            numberOfPayeeApprovalsRequired?: number | undefined
            numberOfPaymentApprovalsRequired?: number | undefined
            permissions?: string[] | undefined
          }
        }
        output: {
          applicationId?: bigint | undefined
          clientId?: string | undefined
          clientKey?: string | undefined
          enabled?: boolean | undefined
          expiry?: string | undefined
          ican?: bigint | undefined
          numberOfPayeeApprovalsRequired?: number | undefined
          numberOfPaymentApprovalsRequired?: number | undefined
          refreshToken?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/apps/accesstokens': {
      $post: {
        input: {
          json: {
            clientId?: string | undefined
            clientSecret?: string | undefined
            grantType?: 'AccessToken' | undefined
            nonce?: bigint | undefined
            refreshToken?: string | undefined
          }
        }
        output: {
          accessToken?: string | undefined
          apiApplicationId?: bigint | undefined
          businessId?: bigint | undefined
          expiry?: string | undefined
          permissions?: string[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/aspsps': {
      $get: {
        input: { query: { currency?: string | undefined } }
        output: {
          aspsps?:
            | {
                alias?: string | undefined
                aspspUuid?: string | undefined
                country?:
                  | { code?: string | undefined; description?: string | undefined }
                  | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                dateCreated?: string | undefined
                lastUpdated?: string | undefined
                logoUrl?: string | undefined
              }[]
            | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batches': {
      $get: {
        input: {
          query: {
            batchStatus?: 'SUBMITTED' | 'REMOVED' | 'SUCCEEDED' | 'FAILED' | undefined
            batchTypes?: 'INTERNAL_TRANSFER' | 'BANK_TRANSFER' | 'NEW_PAYEE' | undefined
            orderBy?: 'DATE' | undefined
            order?: 'DESC' | 'ASC' | undefined
          }
        }
        output: {
          items?:
            | {
                amount?: bigint | undefined
                amountAfterCharges?: bigint | undefined
                batchItemUuid?: string | undefined
                dateCreated?: string | undefined
                feeAmount?: bigint | undefined
                icanFrom?: bigint | undefined
                icanTo?: bigint | undefined
                lastUpdated?: string | undefined
                ref?: string | undefined
                refId?: bigint | undefined
                result?: { code?: bigint | undefined; message?: string | undefined } | undefined
                status?: 'SUBMITTED' | 'REMOVED' | 'SUCCEEDED' | 'FAILED' | undefined
                taxAmount?: bigint | undefined
              }[]
            | undefined
          total?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: {
          json: {
            batchName?: string | undefined
            callbackUrl?: string | undefined
            currency?: string | undefined
            jobNumber?: string | undefined
            type?: 'BANK_TRANSFER' | 'INTERNAL_TRANSFER' | undefined
          }
        }
        output: { batchUuid?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batches/:batchUuid': {
      $delete: {
        input: { param: { batchUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { batchUuid: string } }
        output: {
          batchName?: string | undefined
          batchUuid?: string | undefined
          callbackUrl?: string | undefined
          currency?: string | undefined
          dateCreated?: string | undefined
          jobNumber?: string | undefined
          lastUpdated?: string | undefined
          numberOfItemsFailed?: bigint | undefined
          numberOfItemsSubmitted?: bigint | undefined
          numberOfItemsSucceeded?: bigint | undefined
          sourceName?: string | undefined
          status?:
            | 'PENDING_APPROVAL'
            | 'REJECTED'
            | 'COMPLETE'
            | 'OPEN'
            | 'CANCELLED'
            | 'PENDING_PARENT_BATCH_APPROVAL'
            | 'READY_FOR_PROCESSING'
            | 'PROCESSING'
            | undefined
          type?: 'INTERNAL_TRANSFER' | 'BANK_TRANSFER' | 'NEW_PAYEE' | undefined
          valueOfItemsFailed?: bigint | undefined
          valueOfItemsSubmitted?: bigint | undefined
          valueOfItemsSucceeded?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { batchUuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/batches/:batchUuid/approvals': {
      $get: {
        input: { param: { batchUuid: string } }
        output: {
          approvals?:
            | {
                emailAddress?: string | undefined
                firstName?: string | undefined
                lastName?: string | undefined
                lastUpdated?: string | undefined
                mobileNumber?: string | undefined
                status?: string | undefined
                userId?: bigint | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batches/:batchUuid/banktransfers': {
      $get: {
        input: { param: { batchUuid: string } } & {
          query: { offset?: bigint | undefined; limit?: bigint | undefined }
        }
        output: {
          items?:
            | {
                amount?: bigint | undefined
                amountAfterCharges?: bigint | undefined
                batchItemUuid?: string | undefined
                dateCreated?: string | undefined
                feeAmount?: bigint | undefined
                icanFrom?: bigint | undefined
                icanTo?: bigint | undefined
                lastUpdated?: string | undefined
                ref?: string | undefined
                refId?: bigint | undefined
                result?: { code?: bigint | undefined; message?: string | undefined } | undefined
                status?: 'SUBMITTED' | 'REMOVED' | 'SUCCEEDED' | 'FAILED' | undefined
                taxAmount?: bigint | undefined
              }[]
            | undefined
          total?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { batchUuid: string } } & {
          json:
            | {
                amount?: bigint | undefined
                destAccountHolderName?: string | undefined
                destAccountNumber?: string | undefined
                destIban?: string | undefined
                destNsc?: string | undefined
                icanFrom?: bigint | undefined
                myRef?: string | undefined
                payeeType?: 'ACCOUNT_DETAILS' | undefined
                yourRef?: string | undefined
              }
            | {
                amount?: bigint | undefined
                icanFrom?: bigint | undefined
                myRef?: string | undefined
                payeeId?: bigint | undefined
                payeeType?: 'PAYEE_ID' | undefined
                yourRef?: string | undefined
              }
        }
        output: { batchItemUuid?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batches/:batchUuid/banktransfers/:itemUuid': {
      $delete: {
        input: { param: { batchUuid: string; itemUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/batches/:batchUuid/internaltransfers': {
      $get: {
        input: { param: { batchUuid: string } } & {
          query: { offset?: bigint | undefined; limit?: bigint | undefined }
        }
        output: {
          items?:
            | {
                amount?: bigint | undefined
                amountAfterCharges?: bigint | undefined
                batchItemUuid?: string | undefined
                dateCreated?: string | undefined
                feeAmount?: bigint | undefined
                icanFrom?: bigint | undefined
                icanTo?: bigint | undefined
                lastUpdated?: string | undefined
                ref?: string | undefined
                refId?: bigint | undefined
                result?: { code?: bigint | undefined; message?: string | undefined } | undefined
                status?: 'SUBMITTED' | 'REMOVED' | 'SUCCEEDED' | 'FAILED' | undefined
                taxAmount?: bigint | undefined
              }[]
            | undefined
          total?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { batchUuid: string } } & {
          json: {
            amount?: bigint | undefined
            icanFrom?: bigint | undefined
            icanTo?: bigint | undefined
            ref?: string | undefined
          }
        }
        output: { batchItemUuid?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/batches/:batchUuid/internaltransfers/:itemUuid': {
      $delete: {
        input: { param: { batchUuid: string; itemUuid: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/v1/cards': {
      $get:
        | {
            input: {}
            output: {
              cards?:
                | {
                    blocked?: boolean | undefined
                    cardId?: bigint | undefined
                    dateCreated?: string | undefined
                    emailAddress?: string | undefined
                    eurIcan?: bigint | undefined
                    expiryDate?: string | undefined
                    firstName?: string | undefined
                    gbpIcan?: bigint | undefined
                    lastName?: string | undefined
                    maskedPan?: string | undefined
                    provider?: 'MASTERCARD' | undefined
                    status?:
                      | 'LIVE'
                      | 'CREATED_ACTIVE'
                      | 'CREATED_INACTIVE'
                      | 'DEACTIVATED'
                      | undefined
                    statusReason?: 'LOST_CARD' | 'STOLEN_CARD' | 'CARD_DESTROYED' | undefined
                    userId?: bigint | undefined
                  }[]
                | undefined
            }
            outputFormat: 'json'
            status: 200
          }
        | { input: {}; output: {}; outputFormat: string; status: 401 }
        | { input: {}; output: {}; outputFormat: string; status: 403 }
      $post: {
        input: {
          json: {
            acceptFeesAndCharges?: boolean | undefined
            addressType?: 'HOME' | 'BUSINESS' | undefined
            cardPin?: string | undefined
            eurIcan?: bigint | undefined
            gbpIcan?: bigint | undefined
            userId?: bigint | undefined
          }
        }
        output: {
          cardId?: bigint | undefined
          expiryDate?: string | undefined
          maskedPan?: string | undefined
          status?: 'CREATED_ACTIVE' | 'CREATED_INACTIVE' | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/cards/:cardId/block': {
      $post: { input: { param: { cardId: bigint } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/cards/:cardId/transactions': {
      $get:
        | {
            input: { param: { cardId: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {
              dateRangeTo?: number | undefined
              total?: number | undefined
              transactions?:
                | {
                    amountAfterCharges?: bigint | undefined
                    amountBeforeCharges?: bigint | undefined
                    balance?: bigint | undefined
                    batchItemDetails?:
                      | {
                          batchItemPublicUuid?: string | undefined
                          batchName?: string | undefined
                          batchPublicUuid?: string | undefined
                          jobNumber?: string | undefined
                        }
                      | undefined
                    card?:
                      | {
                          alias?: string | undefined
                          cardId?: bigint | undefined
                          embossBusinessName?: string | undefined
                          embossCardName?: string | undefined
                          expiryDate?: string | undefined
                          maskedPan?: string | undefined
                          provider?: string | undefined
                        }
                      | undefined
                    currency?:
                      | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                      | undefined
                    date?: string | undefined
                    dateAcknowledged?: string | undefined
                    directDebitDetails?:
                      | {
                          directDebitReference?: string | undefined
                          directDebitUuid?: string | undefined
                          mandateReference?: string | undefined
                          mandateUUid?: string | undefined
                          mandateUuid?: string | undefined
                          originatorAlias?: string | undefined
                          originatorLogoUrlLarge?: string | undefined
                          originatorLogoUrlSmall?: string | undefined
                          originatorName?: string | undefined
                          originatorReference?: string | undefined
                        }
                      | undefined
                    eventUuid?: string | undefined
                    feeAmount?: bigint | undefined
                    fxTradeDetails?:
                      | {
                          buyAmount?: bigint | undefined
                          buyCurrency?: string | undefined
                          fixedSide?: string | undefined
                          provider?: string | undefined
                          rate4d?: bigint | undefined
                          sellAmount?: bigint | undefined
                          sellCurrency?: string | undefined
                        }
                      | undefined
                    ican?: bigint | undefined
                    myRef?: string | undefined
                    paymentRequestPublicCode?: string | undefined
                    proprietarySchemeDetails?:
                      | { data?: string | undefined; type?: string | undefined }[]
                      | undefined
                    refId?: bigint | undefined
                    relatedParty?:
                      | {
                          account?:
                            | {
                                accountNumber?: string | undefined
                                alias?: string | undefined
                                bic?: string | undefined
                                iban?: string | undefined
                                id?: bigint | undefined
                                nsc?: string | undefined
                              }
                            | undefined
                          type?: 'FIRE_ACCOUNT' | undefined
                        }
                      | {
                          account?:
                            | {
                                accountNumber?: string | undefined
                                alias?: string | undefined
                                bic?: string | undefined
                                iban?: string | undefined
                                id?: bigint | undefined
                                nsc?: string | undefined
                              }
                            | undefined
                          type?: 'EXTERNAL_ACCOUNT' | undefined
                        }
                      | {
                          account?:
                            | {
                                accountNumber?: string | undefined
                                alias?: string | undefined
                                bic?: string | undefined
                                iban?: string | undefined
                                id?: bigint | undefined
                                nsc?: string | undefined
                              }
                            | undefined
                          type?: 'WITHDRAWAL_ACCOUNT' | undefined
                        }
                      | {
                          cardMerchant?:
                            | {
                                acquirerIdDe32?: string | undefined
                                additionalAmtDe54?: string | undefined
                                additionalDataDe124?: string | undefined
                                additionalDataDe48?: string | undefined
                                authCodeDe38?: string | undefined
                                authorisedByGps?: string | undefined
                                avsResult?: string | undefined
                                billAmt?: bigint | undefined
                                billCcy?: string | undefined
                                expiryDate?: string | undefined
                                mccCode?: string | undefined
                                merchIdDe42?: string | undefined
                                merchNameDe43?: string | undefined
                                mtId?: string | undefined
                                posDataDe22?: string | undefined
                                posDataDe61?: string | undefined
                                posTermnlDe41?: string | undefined
                                procCode?: string | undefined
                                recordDataDe120?: string | undefined
                                respCodeDe39?: string | undefined
                                retRefNoDe37?: string | undefined
                                statusCode?: string | undefined
                                token?: string | undefined
                                txnAmt4d?: bigint | undefined
                                txnCcy?: string | undefined
                                txnCtry?: string | undefined
                                txnDesc?: string | undefined
                                txnStatCode?: string | undefined
                                txnType?: string | undefined
                              }
                            | undefined
                          type?: 'CARD_MERCHANT' | 'CARD_ATM' | undefined
                        }
                      | undefined
                    taxAmount?: bigint | undefined
                    txnId?: bigint | undefined
                    type?: string | undefined
                    yourRef?: string | undefined
                  }[]
                | undefined
            }[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { cardId: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 401
          }
        | {
            input: { param: { cardId: bigint } } & {
              query: { limit?: bigint | undefined; offset?: bigint | undefined }
            }
            output: {}
            outputFormat: string
            status: 403
          }
    }
  } & {
    '/v1/cards/:cardId/unblock': {
      $post: { input: { param: { cardId: bigint } }; output: {}; outputFormat: string; status: 204 }
    }
  } & {
    '/v1/directdebits': {
      $get: {
        input: { query: { mandateUuid: string } }
        output: {
          directdebits?:
            | {
                amount?: bigint | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                dateCreated?: string | undefined
                directDebitReference?: string | undefined
                directDebitUuid?: string | undefined
                isDDIC?: boolean | undefined
                lastUpdated?: string | undefined
                mandateUUid?: string | undefined
                originatorAlias?: string | undefined
                originatorName?: string | undefined
                originatorReference?: string | undefined
                schemeRejectReason?: string | undefined
                schemeRejectReasonCode?:
                  | '0'
                  | '1'
                  | '2'
                  | '3'
                  | '4'
                  | '5'
                  | '6'
                  | '7'
                  | '8'
                  | '9'
                  | 'A'
                  | 'B'
                  | undefined
                status?:
                  | 'RECIEVED'
                  | 'REJECT_REQUESTED'
                  | 'REJECT_READY_FOR_PROCESSING'
                  | 'REJECT_RECORD_IN_PROGRESS'
                  | 'REJECT_RECORDED'
                  | 'REJECT_FILE_CREATED'
                  | 'REJECT_FILE_SENT'
                  | 'COLLECTED'
                  | 'REFUND_REQUESTED'
                  | 'REFUND_RECORD_IN_PROGRESS'
                  | 'REFUND_RECORDED'
                  | 'REFUND_FILE_CREATED'
                  | 'REFUND_FILE_SENT'
                  | undefined
                targetIcan?: bigint | undefined
                targetPayeeId?: bigint | undefined
                type?:
                  | 'FIRST_COLLECTION'
                  | 'ONGOING_COLLECTION'
                  | 'REPRESENTED_COLLECTION'
                  | 'FINAL_COLLECTION'
                  | undefined
              }[]
            | undefined
          total?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/directdebits/:directDebitUuid': {
      $get: {
        input: { param: { directDebitUuid: string } }
        output: {
          amount?: bigint | undefined
          currency?:
            | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
            | undefined
          dateCreated?: string | undefined
          directDebitReference?: string | undefined
          directDebitUuid?: string | undefined
          isDDIC?: boolean | undefined
          lastUpdated?: string | undefined
          mandateUUid?: string | undefined
          originatorAlias?: string | undefined
          originatorName?: string | undefined
          originatorReference?: string | undefined
          schemeRejectReason?: string | undefined
          schemeRejectReasonCode?:
            | '0'
            | '1'
            | '2'
            | '3'
            | '4'
            | '5'
            | '6'
            | '7'
            | '8'
            | '9'
            | 'A'
            | 'B'
            | undefined
          status?:
            | 'RECIEVED'
            | 'REJECT_REQUESTED'
            | 'REJECT_READY_FOR_PROCESSING'
            | 'REJECT_RECORD_IN_PROGRESS'
            | 'REJECT_RECORDED'
            | 'REJECT_FILE_CREATED'
            | 'REJECT_FILE_SENT'
            | 'COLLECTED'
            | 'REFUND_REQUESTED'
            | 'REFUND_RECORD_IN_PROGRESS'
            | 'REFUND_RECORDED'
            | 'REFUND_FILE_CREATED'
            | 'REFUND_FILE_SENT'
            | undefined
          targetIcan?: bigint | undefined
          targetPayeeId?: bigint | undefined
          type?:
            | 'FIRST_COLLECTION'
            | 'ONGOING_COLLECTION'
            | 'REPRESENTED_COLLECTION'
            | 'FINAL_COLLECTION'
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/directdebits/:directDebitUuid/reject': {
      $post: {
        input: { param: { directDebitUuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/mandates': {
      $get: {
        input: {}
        output: {
          mandates?:
            | {
                alias?: string | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                dateCancelled?: string | undefined
                dateCompleted?: string | undefined
                dateCreated?: string | undefined
                fireRejectionReason?:
                  | 'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS'
                  | 'DDIC'
                  | 'ACCOUNT_NOT_FOUND'
                  | 'ACCOUNT_NOT_LIVE'
                  | 'CUSTOMER_NOT_FOUND'
                  | 'BUSINESS_NOT_LIVE'
                  | 'BUSINESS_NOT_FULL'
                  | 'PERSONAL_USER_NOT_LIVE'
                  | 'PERSONAL_USER_NOT_FULL'
                  | 'MANDATE_ALREADY_EXISTS'
                  | 'MANDATE_WITH_DIFERENT_ACCOUNT'
                  | 'NULL_MANDATE_REFERENCE'
                  | 'INVALID_ACCOUNT_CURRENCY'
                  | 'INVALID_MANDATE_REFERENCE'
                  | 'REQUESTED_BY_CUSTOMER_VIA_SUPPORT'
                  | 'CUSTOMER_ACCOUNT_CLOSED'
                  | 'CUSTOMER_DECEASED'
                  | 'ACCOUNT_TRANSFERRED'
                  | 'MANDATE_NOT_FOUND'
                  | 'ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT'
                  | 'INVALID_ACCOUNT_TYPE'
                  | 'MANDATE_EXPIRED'
                  | 'MANDATE_CANCELLED'
                  | 'REQUESTED_BY_CUSTOMER'
                  | undefined
                lastUpdated?: string | undefined
                latestDirectDebitAmount?: bigint | undefined
                latestDirectDebitDate?: string | undefined
                mandateReference?: string | undefined
                mandateUuid?: string | undefined
                numberOfDirectDebitCollected?: bigint | undefined
                originatorAlias?: string | undefined
                originatorLogoUrlLarge?: string | undefined
                originatorLogoUrlSmall?: string | undefined
                originatorName?: string | undefined
                originatorReference?: string | undefined
                schemeCancelReason?: string | undefined
                schemeCancelReasonCode?: string | undefined
                status?:
                  | 'CREATED'
                  | 'LIVE'
                  | 'REJECT_REQUESTED'
                  | 'REJECT_RECORD_IN_PROGRESS'
                  | 'REJECT_RECORDED'
                  | 'REJECT_FILE_CREATED'
                  | 'REJECT_FILE_SENT'
                  | 'CANCEL_REQUESTED'
                  | 'CANCEL_RECORD_IN_PROGRESS'
                  | 'CANCEL_RECORDED'
                  | 'CANCEL_FILE_CREATED'
                  | 'CANCEL_FILE_SENT'
                  | 'COMPLETE'
                  | 'DORMANT'
                  | undefined
                targetIcan?: bigint | undefined
                valueOfDirectDebitCollected?: bigint | undefined
              }[]
            | undefined
          total?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/mandates/:mandateUuid': {
      $get: {
        input: { param: { mandateUuid: string } }
        output: {
          alias?: string | undefined
          currency?:
            | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
            | undefined
          dateCancelled?: string | undefined
          dateCompleted?: string | undefined
          dateCreated?: string | undefined
          fireRejectionReason?:
            | 'ACCOUNT_DOES_NOT_ACCEPT_DIRECT_DEBITS'
            | 'DDIC'
            | 'ACCOUNT_NOT_FOUND'
            | 'ACCOUNT_NOT_LIVE'
            | 'CUSTOMER_NOT_FOUND'
            | 'BUSINESS_NOT_LIVE'
            | 'BUSINESS_NOT_FULL'
            | 'PERSONAL_USER_NOT_LIVE'
            | 'PERSONAL_USER_NOT_FULL'
            | 'MANDATE_ALREADY_EXISTS'
            | 'MANDATE_WITH_DIFERENT_ACCOUNT'
            | 'NULL_MANDATE_REFERENCE'
            | 'INVALID_ACCOUNT_CURRENCY'
            | 'INVALID_MANDATE_REFERENCE'
            | 'REQUESTED_BY_CUSTOMER_VIA_SUPPORT'
            | 'CUSTOMER_ACCOUNT_CLOSED'
            | 'CUSTOMER_DECEASED'
            | 'ACCOUNT_TRANSFERRED'
            | 'MANDATE_NOT_FOUND'
            | 'ACCOUNT_TRANSFERRED_TO_DIFFERENT_ACCOUNT'
            | 'INVALID_ACCOUNT_TYPE'
            | 'MANDATE_EXPIRED'
            | 'MANDATE_CANCELLED'
            | 'REQUESTED_BY_CUSTOMER'
            | undefined
          lastUpdated?: string | undefined
          latestDirectDebitAmount?: bigint | undefined
          latestDirectDebitDate?: string | undefined
          mandateReference?: string | undefined
          mandateUuid?: string | undefined
          numberOfDirectDebitCollected?: bigint | undefined
          originatorAlias?: string | undefined
          originatorLogoUrlLarge?: string | undefined
          originatorLogoUrlSmall?: string | undefined
          originatorName?: string | undefined
          originatorReference?: string | undefined
          schemeCancelReason?: string | undefined
          schemeCancelReasonCode?: string | undefined
          status?:
            | 'CREATED'
            | 'LIVE'
            | 'REJECT_REQUESTED'
            | 'REJECT_RECORD_IN_PROGRESS'
            | 'REJECT_RECORDED'
            | 'REJECT_FILE_CREATED'
            | 'REJECT_FILE_SENT'
            | 'CANCEL_REQUESTED'
            | 'CANCEL_RECORD_IN_PROGRESS'
            | 'CANCEL_RECORDED'
            | 'CANCEL_FILE_CREATED'
            | 'CANCEL_FILE_SENT'
            | 'COMPLETE'
            | 'DORMANT'
            | undefined
          targetIcan?: bigint | undefined
          valueOfDirectDebitCollected?: bigint | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { mandateUuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/mandates/:mandateUuid/activate': {
      $post: {
        input: { param: { mandateUuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/mandates/:mandateUuid/cancel': {
      $post: {
        input: { param: { mandateUuid: string } }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/v1/payees': {
      $get: {
        input: {}
        output: {
          fundingSources?:
            | {
                accountHolderName?: string | undefined
                accountName?: string | undefined
                accountNumber?: string | undefined
                bic?: string | undefined
                createdBy?:
                  | 'CUSTOMER'
                  | 'LODGEMENT'
                  | 'DIRECT DEBIT'
                  | 'OPEN BANKING'
                  | 'FIRE OPEN PAYMENT'
                  | 'FIRE DIRECT'
                  | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                dateCreated?: string | undefined
                iban?: string | undefined
                id?: bigint | undefined
                nsc?: string | undefined
                status?: 'CREATED' | 'LIVE' | 'CLOSED' | 'ARCHIVED' | undefined
              }[]
            | undefined
          total?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/paymentrequests': {
      $post: {
        input: {
          json: {
            additionalFields?: string | undefined
            amount?: bigint | undefined
            collectFields?: string | undefined
            currency: 'EUR' | 'GBP'
            description: string
            expiry?: string | undefined
            icanTo: bigint
            mandatoryFields?: string | undefined
            maxNumberPayments?: number | undefined
            myRef: string
            orderDetails?:
              | {
                  comment1?: string | undefined
                  comment2?: string | undefined
                  customerNumber?: string | undefined
                  deliveryAddressLine1?: string | undefined
                  deliveryAddressLine2?: string | undefined
                  deliveryCity?: string | undefined
                  deliveryCountry?: string | undefined
                  deliveryPostCode?: string | undefined
                  merchantCustomerIdentification?: string | undefined
                  merchantNumber?: string | undefined
                  orderId?: string | undefined
                  productId?: string | undefined
                  variableReference?: string | undefined
                }
              | undefined
            returnUrl?: string | undefined
            type: 'OTHER'
          }
        }
        output: { code?: string | undefined; type?: 'OTHER' | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/payments/:paymentUuid': {
      $get: {
        input: { param: { paymentUuid: string } }
        output: {
          additionalFields?: string | undefined
          amount?: bigint | undefined
          collectFields?: string | undefined
          currency?:
            | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
            | undefined
          description?: string | undefined
          expiry?: string | undefined
          icanTo?: bigint | undefined
          mandatoryFields?: string | undefined
          maxNumberPayments?: number | undefined
          myRef?: string | undefined
          orderDetails?:
            | {
                comment1?: string | undefined
                comment2?: string | undefined
                customerNumber?: string | undefined
                deliveryAddressLine1?: string | undefined
                deliveryAddressLine2?: string | undefined
                deliveryCity?: string | undefined
                deliveryCountry?: string | undefined
                deliveryPostCode?: string | undefined
                merchantCustomerIdentification?: string | undefined
                merchantNumber?: string | undefined
                orderId?: string | undefined
                productId?: string | undefined
                variableReference?: string | undefined
              }
            | undefined
          paymentRequestCode?: string | undefined
          paymentUuid?: string | undefined
          returnUrl?: string | undefined
          status?:
            | 'AWAITING_AUTHORISATION'
            | 'AUTHORISED'
            | 'AWAITING_MULTI_AUTHORISATION'
            | 'NOT_AUTHORISED'
            | 'PAID'
            | 'REJECTED'
            | 'ACCEPTED'
            | 'RECEIVED'
            | undefined
          transactionType?: 'REFUND_REQUEST' | 'PAYMENT' | undefined
          type?: 'OTHER' | undefined
          webhookUrl?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/user/:userId': {
      $get: {
        input: { param: { userId: bigint } }
        output: {
          emailAddress?: string | undefined
          firstName?: string | undefined
          id?: bigint | undefined
          lastName?: string | undefined
          lastlogin?: string | undefined
          mobileApplicationDetails?:
            | {
                OS?: 'Android' | 'IOS' | 'OTHER' | undefined
                businessUserId?: bigint | undefined
                clientID?: string | undefined
                deviceName?: 'iPhone' | 'Android' | 'Other' | undefined
                deviceOSVersion?: string | undefined
                mobileApplicationId?: bigint | undefined
                status?: 'LIVE' | 'CLOSED' | 'LOCKED' | 'SMS_SENT' | undefined
              }
            | undefined
          mobileNumber?: string | undefined
          role?: 'ADMIN' | 'FULL_USER' | 'READ_ONLY' | 'CARD_ONLY' | undefined
          status?: 'LIVE' | 'CLOSED' | 'FROZEN' | 'INVITE_SENT' | 'SMS_CODE_SENT' | undefined
          userCvl?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v1/users': {
      $get: {
        input: {}
        output: {
          emailAddress?: string | undefined
          firstName?: string | undefined
          id?: bigint | undefined
          lastName?: string | undefined
          lastlogin?: string | undefined
          mobileApplicationDetails?:
            | {
                OS?: 'Android' | 'IOS' | 'OTHER' | undefined
                businessUserId?: bigint | undefined
                clientID?: string | undefined
                deviceName?: 'iPhone' | 'Android' | 'Other' | undefined
                deviceOSVersion?: string | undefined
                mobileApplicationId?: bigint | undefined
                status?: 'LIVE' | 'CLOSED' | 'LOCKED' | 'SMS_SENT' | undefined
              }
            | undefined
          mobileNumber?: string | undefined
          role?: 'ADMIN' | 'FULL_USER' | 'READ_ONLY' | 'CARD_ONLY' | undefined
          status?: 'LIVE' | 'CLOSED' | 'FROZEN' | 'INVITE_SENT' | 'SMS_CODE_SENT' | undefined
          userCvl?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v3/accounts/:ican/transactions': {
      $get: {
        input: { param: { ican: bigint } } & {
          query: {
            limit?: bigint | undefined
            dateRangeFrom?: bigint | undefined
            dateRangeTo?: bigint | undefined
            startAfter?: string | undefined
          }
        }
        output: {
          content?:
            | {
                amountAfterCharges?: bigint | undefined
                amountBeforeCharges?: bigint | undefined
                balance?: bigint | undefined
                batchItemDetails?:
                  | {
                      batchItemPublicUuid?: string | undefined
                      batchName?: string | undefined
                      batchPublicUuid?: string | undefined
                      jobNumber?: string | undefined
                    }
                  | undefined
                card?:
                  | {
                      alias?: string | undefined
                      cardId?: bigint | undefined
                      embossBusinessName?: string | undefined
                      embossCardName?: string | undefined
                      expiryDate?: string | undefined
                      maskedPan?: string | undefined
                      provider?: string | undefined
                    }
                  | undefined
                currency?:
                  | { code?: 'EUR' | 'GBP' | undefined; description?: string | undefined }
                  | undefined
                date?: string | undefined
                dateAcknowledged?: string | undefined
                directDebitDetails?:
                  | {
                      directDebitReference?: string | undefined
                      directDebitUuid?: string | undefined
                      mandateReference?: string | undefined
                      mandateUUid?: string | undefined
                      mandateUuid?: string | undefined
                      originatorAlias?: string | undefined
                      originatorLogoUrlLarge?: string | undefined
                      originatorLogoUrlSmall?: string | undefined
                      originatorName?: string | undefined
                      originatorReference?: string | undefined
                    }
                  | undefined
                eventUuid?: string | undefined
                feeAmount?: bigint | undefined
                fxTradeDetails?:
                  | {
                      buyAmount?: bigint | undefined
                      buyCurrency?: string | undefined
                      fixedSide?: string | undefined
                      provider?: string | undefined
                      rate4d?: bigint | undefined
                      sellAmount?: bigint | undefined
                      sellCurrency?: string | undefined
                    }
                  | undefined
                ican?: bigint | undefined
                myRef?: string | undefined
                paymentRequestPublicCode?: string | undefined
                proprietarySchemeDetails?:
                  | { data?: string | undefined; type?: string | undefined }[]
                  | undefined
                refId?: bigint | undefined
                relatedParty?:
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'FIRE_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'EXTERNAL_ACCOUNT' | undefined
                    }
                  | {
                      account?:
                        | {
                            accountNumber?: string | undefined
                            alias?: string | undefined
                            bic?: string | undefined
                            iban?: string | undefined
                            id?: bigint | undefined
                            nsc?: string | undefined
                          }
                        | undefined
                      type?: 'WITHDRAWAL_ACCOUNT' | undefined
                    }
                  | {
                      cardMerchant?:
                        | {
                            acquirerIdDe32?: string | undefined
                            additionalAmtDe54?: string | undefined
                            additionalDataDe124?: string | undefined
                            additionalDataDe48?: string | undefined
                            authCodeDe38?: string | undefined
                            authorisedByGps?: string | undefined
                            avsResult?: string | undefined
                            billAmt?: bigint | undefined
                            billCcy?: string | undefined
                            expiryDate?: string | undefined
                            mccCode?: string | undefined
                            merchIdDe42?: string | undefined
                            merchNameDe43?: string | undefined
                            mtId?: string | undefined
                            posDataDe22?: string | undefined
                            posDataDe61?: string | undefined
                            posTermnlDe41?: string | undefined
                            procCode?: string | undefined
                            recordDataDe120?: string | undefined
                            respCodeDe39?: string | undefined
                            retRefNoDe37?: string | undefined
                            statusCode?: string | undefined
                            token?: string | undefined
                            txnAmt4d?: bigint | undefined
                            txnCcy?: string | undefined
                            txnCtry?: string | undefined
                            txnDesc?: string | undefined
                            txnStatCode?: string | undefined
                            txnType?: string | undefined
                          }
                        | undefined
                      type?: 'CARD_MERCHANT' | 'CARD_ATM' | undefined
                    }
                  | undefined
                taxAmount?: bigint | undefined
                txnId?: bigint | undefined
                type?: string | undefined
                yourRef?: string | undefined
              }[]
            | undefined
          links?: { href?: string | undefined; rel?: string | undefined }[] | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
