type DateTime = string
type Metadata = { isDeleted?: (boolean | null) | undefined }
type AccountTransaction = {
  bankAccountRef?: { id?: string | undefined; name?: string | undefined } | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?:
    | (
        | {
            amount?: number | undefined
            description?: (string | null) | undefined
            recordRef?: { dataType?: string | undefined; id?: string | undefined } | undefined
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  status?: 'Unknown' | 'Unreconciled' | 'Reconciled' | 'Void' | undefined
  totalAmount?: number | undefined
  transactionId?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type HalRef = { href?: string | undefined }
type Links = {
  current: HalRef
  next?: HalRef | undefined
  previous?: HalRef | undefined
  self: HalRef
}
type AccountTransactions = {
  results?: AccountTransaction[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BankAccount = {
  accountName?: (string | null) | undefined
  accountNumber?: (string | null) | undefined
  accountType?: 'Unknown' | 'Credit' | 'Debit' | undefined
  availableBalance?: (number | null) | undefined
  balance?: (number | null) | undefined
  currency?: string | undefined
  iBan?: (string | null) | undefined
  id?: string | undefined
  institution?: (string | null) | undefined
  metadata?: Metadata | undefined
  nominalCode?: (string | null) | undefined
  overdraftLimit?: (number | null) | undefined
  sortCode?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type BankAccounts = {
  results?: BankAccount[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BankTransactions = {
  accountId?: (string | null) | undefined
  transactions?:
    | (
        | {
            amount?: number | undefined
            balance?: number | undefined
            clearedOnDate?: DateTime | undefined
            counterparty?: (string | null) | undefined
            description?: (string | null) | undefined
            id?: string | undefined
            reconciled?: boolean | undefined
            reference?: (string | null) | undefined
            transactionType?:
              | 'Unknown'
              | 'Credit'
              | 'Debit'
              | 'Int'
              | 'Div'
              | 'Fee'
              | 'SerChg'
              | 'Dep'
              | 'Atm'
              | 'Pos'
              | 'Xfer'
              | 'Check'
              | 'Payment'
              | 'Cash'
              | 'DirectDep'
              | 'DirectDebit'
              | 'RepeatPmt'
              | 'Other'
              | undefined
            modifiedDate?: DateTime | undefined
            sourceModifiedDate?: DateTime | undefined
          }[]
        | null
      )
    | undefined
}
type BankTransactionsResponse = {
  results?: BankTransactions[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Attachment = {
  contentType?: (string | null) | undefined
  dateCreated?: DateTime | undefined
  fileSize?: (number | null) | undefined
  id?: string | undefined
  includeWhenSent?: boolean | undefined
  name?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type AttachmentsDataset = { attachments?: (Attachment[] | null) | undefined }
type DirectCost = {
  contactRef?: { dataType?: (string | null) | undefined; id: string } | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        description?: (string | null) | undefined
        discountAmount?: (number | null) | undefined
        discountPercentage?: (number | null) | undefined
        itemRef?: { id: string; name?: (string | null) | undefined } | undefined
        quantity: number
        subTotal?: (number | null) | undefined
        taxAmount?: (number | null) | undefined
        taxRateRef?:
          | {
              effectiveTaxRate?: number | undefined
              id?: string | undefined
              name?: string | undefined
            }
          | undefined
        totalAmount?: (number | null) | undefined
        tracking?:
          | {
              invoiceTo?: { dataType?: string | undefined; id?: string | undefined } | undefined
              recordRefs: { dataType?: string | undefined; id?: string | undefined }[]
            }
          | undefined
        trackingCategoryRefs?:
          | ({ id: string; name?: (string | null) | undefined }[] | null)
          | undefined
        unitAmount: number
      }[]
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?:
    | {
        allocation: {
          allocatedOnDate?: DateTime | undefined
          currency?: string | undefined
          currencyRate?: (number | null) | undefined
          totalAmount?: number | undefined
        }
        payment: {
          accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
          currency?: string | undefined
          currencyRate?: (number | null) | undefined
          id?: string | undefined
          note?: (string | null) | undefined
          paidOnDate?: DateTime | undefined
          reference?: (string | null) | undefined
          totalAmount?: number | undefined
        }
      }[]
    | undefined
  reference?: (string | null) | undefined
  subTotal?: number | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DirectCosts = {
  results?: DirectCost[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type DirectIncome = {
  contactRef?: { dataType?: (string | null) | undefined; id: string } | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        description?: (string | null) | undefined
        discountAmount?: (number | null) | undefined
        discountPercentage?: (number | null) | undefined
        itemRef?: { id: string; name?: (string | null) | undefined } | undefined
        quantity: number
        subTotal?: (number | null) | undefined
        taxAmount?: (number | null) | undefined
        taxRateRef?:
          | {
              effectiveTaxRate?: number | undefined
              id?: string | undefined
              name?: string | undefined
            }
          | undefined
        totalAmount?: (number | null) | undefined
        trackingCategoryRefs?:
          | ({ id: string; name?: (string | null) | undefined }[] | null)
          | undefined
        unitAmount: number
      }[]
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?:
    | {
        allocation: {
          allocatedOnDate?: DateTime | undefined
          currency?: string | undefined
          currencyRate?: (number | null) | undefined
          totalAmount?: number | undefined
        }
        payment: {
          accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
          currency?: string | undefined
          currencyRate?: (number | null) | undefined
          id?: string | undefined
          note?: (string | null) | undefined
          paidOnDate?: DateTime | undefined
          reference?: (string | null) | undefined
          totalAmount?: number | undefined
        }
      }[]
    | undefined
  reference?: (string | null) | undefined
  subTotal?: number | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DirectIncomes = {
  results?: DirectIncome[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Transfer = {
  contactRef?: { dataType?: (string | null) | undefined; id: string } | undefined
  date?: DateTime | undefined
  depositedRecordRefs?: (string[] | null) | undefined
  description?: (string | null) | undefined
  from?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        amount?: number | undefined
        currency?: string | undefined
      }
    | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  to?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        amount?: number | undefined
        currency?: string | undefined
      }
    | undefined
  trackingCategoryRefs?: ({ id: string; name?: (string | null) | undefined }[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Transfers = {
  results?: Transfer[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PushOptionProperty = {
  description: string
  displayName: string
  options?:
    | (
        | {
            description?: string | undefined
            displayName?: string | undefined
            required?: boolean | undefined
            type?:
              | 'Array'
              | 'Object'
              | 'String'
              | 'Number'
              | 'Boolean'
              | 'DateTime'
              | 'File'
              | 'MultiPart'
              | undefined
            value?: string | undefined
          }[]
        | null
      )
    | undefined
  properties?: ({ [x: string]: PushOptionProperty } | null) | undefined
  required: boolean
  type: 'Array' | 'Object' | 'String' | 'Number' | 'Boolean' | 'DateTime' | 'File' | 'MultiPart'
  validation?:
    | {
        information?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
      }
    | undefined
}
type PushOption = {
  description?: string | undefined
  displayName: string
  options?:
    | (
        | {
            description?: string | undefined
            displayName?: string | undefined
            required?: boolean | undefined
            type?:
              | 'Array'
              | 'Object'
              | 'String'
              | 'Number'
              | 'Boolean'
              | 'DateTime'
              | 'File'
              | 'MultiPart'
              | undefined
            value?: string | undefined
          }[]
        | null
      )
    | undefined
  properties?: ({ [x: string]: PushOptionProperty } | null) | undefined
  required: boolean
  type: 'Array' | 'Object' | 'String' | 'Number' | 'Boolean' | 'DateTime' | 'File' | 'MultiPart'
  validation?:
    | ({
        information?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | { details: string; field?: string | undefined; ref?: (string | null) | undefined }[]
              | null
            )
          | undefined
      } | null)
    | undefined
}
type ValidDataTypeLinks = {
  links?: (string[] | null) | undefined
  property?: (string | null) | undefined
}
type Account = {
  currency?: string | undefined
  currentBalance?: (number | null) | undefined
  description?: (string | null) | undefined
  fullyQualifiedCategory?: (string | null) | undefined
  fullyQualifiedName?: (string | null) | undefined
  id?: string | undefined
  isBankAccount?: boolean | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  nominalCode?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | 'Pending' | undefined
  type?: 'Unknown' | 'Asset' | 'Expense' | 'Income' | 'Liability' | 'Equity' | undefined
  validDatatypeLinks?: (ValidDataTypeLinks[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type DataType =
  | 'accountTransactions'
  | 'balanceSheet'
  | 'bankAccounts'
  | 'bankTransactions'
  | 'billCreditNotes'
  | 'billPayments'
  | 'bills'
  | 'cashFlowStatement'
  | 'chartOfAccounts'
  | 'company'
  | 'creditNotes'
  | 'customers'
  | 'directCosts'
  | 'directIncomes'
  | 'invoices'
  | 'items'
  | 'journalEntries'
  | 'journals'
  | 'paymentMethods'
  | 'payments'
  | 'profitAndLoss'
  | 'purchaseOrders'
  | 'salesOrders'
  | 'suppliers'
  | 'taxRates'
  | 'trackingCategories'
  | 'transfers'
  | 'banking-accountBalances'
  | 'banking-accounts'
  | 'banking-transactionCategories'
  | 'banking-transactions'
  | 'commerce-companyInfo'
  | 'commerce-customers'
  | 'commerce-disputes'
  | 'commerce-locations'
  | 'commerce-orders'
  | 'commerce-paymentMethods'
  | 'commerce-payments'
  | 'commerce-productCategories'
  | 'commerce-products'
  | 'commerce-taxComponents'
  | 'commerce-transactions'
type CreateAccountResponse = {
  data?: Account | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreateBankAccountResponse = {
  data?: Account | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreateBankTransactionsResponse = {
  data?: BankTransactions | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateBankAccountResponse = {
  data?: BankAccount | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type ProjectRef = { id: string; name?: (string | null) | undefined }
type BillCreditNote = {
  allocatedOnDate?: DateTime | undefined
  billCreditNoteNumber?: (string | null) | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  discountPercentage?: number | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: (number | null) | undefined
            discountPercentage?: (number | null) | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity: number
            subTotal?: (number | null) | undefined
            taxAmount?: (number | null) | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: (number | null) | undefined
            tracking?:
              | {
                  categoryRefs: { id: string; name?: (string | null) | undefined }[]
                  customerRef?:
                    | { companyName?: (string | null) | undefined; id: string }
                    | undefined
                  isBilledTo: 'Unknown' | 'NotApplicable' | 'Customer' | 'Project'
                  isRebilledTo: 'Unknown' | 'NotApplicable' | 'Customer' | 'Project'
                  projectRef?: ProjectRef | undefined
                }
              | undefined
            trackingCategoryRefs?:
              | ({ id: string; name?: (string | null) | undefined }[] | null)
              | undefined
            unitAmount: number
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?:
    | (
        | {
            allocation: {
              allocatedOnDate?: DateTime | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              totalAmount?: number | undefined
            }
            payment: {
              accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              id?: string | undefined
              note?: (string | null) | undefined
              paidOnDate?: DateTime | undefined
              reference?: (string | null) | undefined
              totalAmount?: number | undefined
            }
          }[]
        | null
      )
    | undefined
  remainingCredit?: number | undefined
  status?: 'Unknown' | 'Draft' | 'Submitted' | 'Paid' | 'Void' | 'PartiallyPaid' | undefined
  subTotal?: number | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  supplierRef?: { id: string; supplierName?: (string | null) | undefined } | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: ({ amount: number; name: string }[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillCreditNoteResponse = {
  data?: BillCreditNote | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateBillCreditNoteResponse = {
  data?: BillCreditNote | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type BillPayment = {
  accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?:
    | (
        | {
            allocatedOnDate?: DateTime | undefined
            amount: number
            links?:
              | (
                  | {
                      amount?: (number | null) | undefined
                      currencyRate?: (number | null) | undefined
                      id?: (string | null) | undefined
                      type:
                        | 'Unknown'
                        | 'Unlinked'
                        | 'Bill'
                        | 'Other'
                        | 'CreditNote'
                        | 'BillPayment'
                        | 'PaymentOnAccount'
                        | 'Refund'
                        | 'ManualJournal'
                        | 'Discount'
                    }[]
                  | null
                )
              | undefined
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentMethodRef?: { id?: string | undefined; name?: (string | null) | undefined } | undefined
  reference?: (string | null) | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  supplierRef?: { id: string; supplierName?: (string | null) | undefined } | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillPaymentResponse = {
  data?: BillPayment | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type PushOperationSummary = {
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Bill = {
  amountDue?: (number | null) | undefined
  currency?: {} | undefined
  currencyRate?: (number | null) | undefined
  dueDate?: {} | undefined
  id?: string | undefined
  issueDate?: {} | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: (number | null) | undefined
            discountPercentage?: (number | null) | undefined
            isDirectCost?: boolean | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity: number
            subTotal?: (number | null) | undefined
            taxAmount?: (number | null) | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: (number | null) | undefined
            tracking?:
              | {
                  categoryRefs: { id: string; name?: (string | null) | undefined }[]
                  customerRef?:
                    | { companyName?: (string | null) | undefined; id: string }
                    | undefined
                  isBilledTo: 'Unknown' | 'NotApplicable' | 'Customer' | 'Project'
                  isRebilledTo: 'Unknown' | 'NotApplicable' | 'Customer' | 'Project'
                  projectRef?: ProjectRef | undefined
                }
              | undefined
            trackingCategoryRefs?:
              | ({ id: string; name?: (string | null) | undefined }[] | null)
              | undefined
            unitAmount: number
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?:
    | (
        | {
            allocation: {
              allocatedOnDate?: DateTime | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              totalAmount?: number | undefined
            }
            payment: {
              accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              id?: string | undefined
              note?: (string | null) | undefined
              paidOnDate?: DateTime | undefined
              reference?: (string | null) | undefined
              totalAmount?: number | undefined
            }
          }[]
        | null
      )
    | undefined
  purchaseOrderRefs?:
    | ({ id?: string | undefined; purchaseOrderNumber?: (string | null) | undefined }[] | null)
    | undefined
  reference?: (string | null) | undefined
  status?: 'Unknown' | 'Open' | 'PartiallyPaid' | 'Paid' | 'Void' | 'Draft' | undefined
  subTotal?: number | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  supplierRef?: { id: string; supplierName?: (string | null) | undefined } | undefined
  taxAmount?: number | undefined
  totalAmount?: number | undefined
  withholdingTax?: ({ amount: number; name: string }[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateBillResponse = {
  data?: Bill | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateBillResponse = {
  data?: Bill | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreditNote = {
  additionalTaxAmount?: number | undefined
  additionalTaxPercentage?: number | undefined
  allocatedOnDate?: DateTime | undefined
  creditNoteNumber?: (string | null) | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  customerRef?: { companyName?: (string | null) | undefined; id: string } | undefined
  discountPercentage?: number | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: (number | null) | undefined
            discountPercentage?: (number | null) | undefined
            isDirectIncome?: boolean | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity: number
            subTotal?: (number | null) | undefined
            taxAmount?: (number | null) | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: (number | null) | undefined
            tracking?:
              | {
                  categoryRefs: { id: string; name?: (string | null) | undefined }[]
                  customerRef?:
                    | { companyName?: (string | null) | undefined; id: string }
                    | undefined
                  isBilledTo: 'Unknown' | 'NotApplicable' | 'Project'
                  isRebilledTo: 'Unknown' | 'NotApplicable' | 'Project'
                  projectRef?: ProjectRef | undefined
                }
              | undefined
            trackingCategoryRefs?:
              | ({ id: string; name?: (string | null) | undefined }[] | null)
              | undefined
            unitAmount: number
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentAllocations?:
    | (
        | {
            allocation: {
              allocatedOnDate?: DateTime | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              totalAmount?: number | undefined
            }
            payment: {
              accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              id?: string | undefined
              note?: (string | null) | undefined
              paidOnDate?: DateTime | undefined
              reference?: (string | null) | undefined
              totalAmount?: number | undefined
            }
          }[]
        | null
      )
    | undefined
  remainingCredit?: number | undefined
  status?: 'Unknown' | 'Draft' | 'Submitted' | 'Paid' | 'Void' | 'PartiallyPaid' | undefined
  subTotal?: number | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: ({ amount: number; name: string }[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateCreditNoteResponse = {
  data?: CreditNote | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateCreditNoteResponse = {
  data?: CreditNote | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Customer = {
  addresses?: (unknown[] | null) | undefined
  contactName?: (string | null) | undefined
  contacts?:
    | (
        | {
            address?: unknown | undefined
            email?: (string | null) | undefined
            modifiedDate?: DateTime | undefined
            name?: (string | null) | undefined
            phone?: (unknown[] | null) | undefined
            status: 'Unknown' | 'Active' | 'Archived'
          }[]
        | null
      )
    | undefined
  customerName?: (string | null) | undefined
  defaultCurrency?: string | undefined
  emailAddress?: (string | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  phone?: (string | null) | undefined
  registrationNumber?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  taxNumber?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateCustomerResponse = {
  data?: Customer | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateCustomerResponse = {
  data?: Customer | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreateDirectCostResponse = {
  data?: DirectCost | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreateDirectIncomeResponse = {
  data?: DirectIncome | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Invoice = {
  additionalTaxAmount?: number | undefined
  additionalTaxPercentage?: number | undefined
  amountDue?: number | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  customerRef?: { companyName?: (string | null) | undefined; id: string } | undefined
  discountPercentage?: (number | null) | undefined
  dueDate?: DateTime | undefined
  id?: string | undefined
  invoiceNumber?: (string | null) | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: (number | null) | undefined
            discountPercentage?: (number | null) | undefined
            isDirectIncome?: boolean | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity: number
            subTotal?: (number | null) | undefined
            taxAmount?: (number | null) | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: (number | null) | undefined
            tracking?:
              | {
                  categoryRefs: { id: string; name?: (string | null) | undefined }[]
                  customerRef?:
                    | { companyName?: (string | null) | undefined; id: string }
                    | undefined
                  isBilledTo: 'Unknown' | 'NotApplicable' | 'Project'
                  isRebilledTo: 'Unknown' | 'NotApplicable' | 'Project'
                  projectRef?: ProjectRef | undefined
                }
              | undefined
            trackingCategoryRefs?:
              | ({ id: string; name?: (string | null) | undefined }[] | null)
              | undefined
            unitAmount: number
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paidOnDate?: DateTime | undefined
  paymentAllocations?:
    | (
        | {
            allocation: {
              allocatedOnDate?: DateTime | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              totalAmount?: number | undefined
            }
            payment: {
              accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
              currency?: string | undefined
              currencyRate?: (number | null) | undefined
              id?: string | undefined
              note?: (string | null) | undefined
              paidOnDate?: DateTime | undefined
              reference?: (string | null) | undefined
              totalAmount?: number | undefined
            }
          }[]
        | null
      )
    | undefined
  salesOrderRefs?: (string[] | null) | undefined
  status?: 'Unknown' | 'Draft' | 'Submitted' | 'PartiallyPaid' | 'Paid' | 'Void' | undefined
  subTotal?: (number | null) | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  totalAmount?: number | undefined
  totalDiscount?: (number | null) | undefined
  totalTaxAmount?: number | undefined
  withholdingTax?: ({ amount: number; name: string }[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateInvoiceResponse = {
  data?: Invoice | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdateInvoiceResponse = {
  data?: Invoice | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Item = {
  billItem?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        description?: (string | null) | undefined
        taxRateRef?:
          | {
              effectiveTaxRate?: number | undefined
              id?: string | undefined
              name?: string | undefined
            }
          | undefined
        unitPrice?: (number | null) | undefined
      }
    | undefined
  code?: (string | null) | undefined
  id?: string | undefined
  invoiceItem?:
    | {
        accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
        description?: (string | null) | undefined
        taxRateRef?:
          | {
              effectiveTaxRate?: number | undefined
              id?: string | undefined
              name?: string | undefined
            }
          | undefined
        unitPrice?: (number | null) | undefined
      }
    | undefined
  isBillItem?: boolean | undefined
  isInvoiceItem?: boolean | undefined
  itemStatus?: 'Unknown' | 'Active' | 'Archived' | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  type?: unknown | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateItemResponse = {
  data?: Item | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type JournalEntry = {
  createdOn?: DateTime | undefined
  description?: (string | null) | undefined
  id?: string | undefined
  journalLines?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            currency?: (string | null) | undefined
            description?: (string | null) | undefined
            netAmount: number
            tracking?:
              | {
                  recordRefs?:
                    | ({ dataType?: string | undefined; id?: string | undefined }[] | null)
                    | undefined
                }
              | undefined
          }[]
        | null
      )
    | undefined
  journalRef?: { id: string; name?: (string | null) | undefined } | undefined
  metadata?: Metadata | undefined
  postedOn?: DateTime | undefined
  recordRef?: { dataType?: string | undefined; id?: string | undefined } | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  updatedOn?: DateTime | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateJournalEntryResponse = {
  data?: JournalEntry | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Journal = {
  createdOn?: DateTime | undefined
  hasChildren?: boolean | undefined
  id?: string | undefined
  journalCode?: (string | null) | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  type?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Payment = {
  accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  customerRef?: { companyName?: (string | null) | undefined; id: string } | undefined
  date?: DateTime | undefined
  id?: string | undefined
  lines?:
    | (
        | {
            allocatedOnDate?: DateTime | undefined
            amount: number
            links?:
              | (
                  | {
                      amount?: (number | null) | undefined
                      currencyRate?: (number | null) | undefined
                      id?: string | undefined
                      type:
                        | 'Unknown'
                        | 'Unlinked'
                        | 'Invoice'
                        | 'CreditNote'
                        | 'Other'
                        | 'Refund'
                        | 'Payment'
                        | 'PaymentOnAccount'
                        | 'ManualJournal'
                        | 'Discount'
                    }[]
                  | null
                )
              | undefined
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentMethodRef?: { id?: string | undefined; name?: (string | null) | undefined } | undefined
  reference?: (string | null) | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  totalAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreatePaymentResponse = {
  data?: Payment | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type PurchaseOrder = {
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  deliveryDate?: DateTime | undefined
  expectedDeliveryDate?: DateTime | undefined
  id?: string | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: number | undefined
            discountPercentage?: number | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity?: number | undefined
            subTotal?: number | undefined
            taxAmount?: number | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: number | undefined
            trackingCategoryRefs?:
              | ({ id: string; name?: (string | null) | undefined }[] | null)
              | undefined
            unitAmount?: number | undefined
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  paymentDueDate?: DateTime | undefined
  purchaseOrderNumber?: (string | null) | undefined
  shipTo?:
    | {
        address?: unknown | undefined
        contact?:
          | {
              email?: (string | null) | undefined
              name?: (string | null) | undefined
              phone?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  status?: 'Unknown' | 'Draft' | 'Open' | 'Closed' | 'Void' | undefined
  subTotal?: number | undefined
  supplierRef?: { id: string; supplierName?: (string | null) | undefined } | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreatePurchaseOrderResponse = {
  data?: PurchaseOrder | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type UpdatePurchaseOrderResponse = {
  data?: PurchaseOrder | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Supplier = {
  addresses?: (unknown[] | null) | undefined
  contactName?: (string | null) | undefined
  defaultCurrency?: (string | null) | undefined
  emailAddress?: (string | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  phone?: (string | null) | undefined
  registrationNumber?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  supplementalData?:
    | { content?: ({ [x: string]: { [x: string]: { [x: string]: unknown } } } | null) | undefined }
    | undefined
  supplierName?: (string | null) | undefined
  taxNumber?: (string | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type CreateSupplierResponse = {
  data?: Supplier | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type CreateTransferResponse = {
  data?: Transfer | undefined
  changes?:
    | (
        | {
            attachmentId?: (string | null) | undefined
            recordRef?: { dataType?: DataType | undefined; id?: string | undefined } | undefined
            type?: 'Unknown' | 'Created' | 'Modified' | 'Deleted' | 'AttachmentUploaded' | undefined
          }[]
        | null
      )
    | undefined
  companyId: string
  completedOnUtc?: DateTime | undefined
  dataConnectionKey: string
  dataType?: DataType | undefined
  errorMessage?: (string | null) | undefined
  pushOperationKey: string
  requestedOnUtc: DateTime
  status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
  statusCode: number
  timeoutInMinutes?: (number | null) | undefined
  timeoutInSeconds?: (number | null) | undefined
  validation?:
    | {
        errors?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
        warnings?:
          | (
              | {
                  itemId?: (string | null) | undefined
                  message?: (string | null) | undefined
                  validatorName?: (string | null) | undefined
                }[]
              | null
            )
          | undefined
      }
    | undefined
}
type Accounts = {
  results?: Account[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BankStatementAccount = {
  accountName?: (string | null) | undefined
  accountNumber?: (string | null) | undefined
  availableBalance?: (number | null) | undefined
  balance?: (number | null) | undefined
  currency?: (string | null) | undefined
  fromDate?: DateTime | undefined
  iban?: (string | null) | undefined
  id?: string | undefined
  institution?: (string | null) | undefined
  modifiedDate?: { modifiedDate?: DateTime | undefined } | undefined
  nominalCode?: (string | null) | undefined
  overdraftLimit?: (number | null) | undefined
  sortCode?: (string | null) | undefined
  sourceModifiedDate?: { sourceModifiedDate?: DateTime | undefined } | undefined
  toDate?: DateTime | undefined
}
type BankAccountTransactions = {
  results?:
    | {
        amount?: number | undefined
        balance?: number | undefined
        clearedOnDate?: DateTime | undefined
        counterparty?: (string | null) | undefined
        description?: (string | null) | undefined
        id?: string | undefined
        reconciled?: boolean | undefined
        reference?: (string | null) | undefined
        transactionType?:
          | 'Unknown'
          | 'Credit'
          | 'Debit'
          | 'Int'
          | 'Div'
          | 'Fee'
          | 'SerChg'
          | 'Dep'
          | 'Atm'
          | 'Pos'
          | 'Xfer'
          | 'Check'
          | 'Payment'
          | 'Cash'
          | 'DirectDep'
          | 'DirectDebit'
          | 'RepeatPmt'
          | 'Other'
          | undefined
        modifiedDate?: DateTime | undefined
        sourceModifiedDate?: DateTime | undefined
      }[]
    | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BillCreditNotes = {
  results?: BillCreditNote[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type BillPayments = {
  results?: BillPayment[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Bills = {
  results?: Bill[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type CreditNotes = {
  results?: CreditNote[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Customers = {
  results?: Customer[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type ReportLine = {
  accountId?: (string | null) | undefined
  items?: (ReportLine[] | null) | undefined
  name?: (string | null) | undefined
  value: number
}
type BalanceSheet = {
  currency: string
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reports: {
    assets?: ReportLine | undefined
    date?: DateTime | undefined
    equity?: ReportLine | undefined
    liabilities?: ReportLine | undefined
    netAssets: number
  }[]
}
type CashFlowStatement = {
  currency: string
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reportBasis: 'Unknown' | 'Accrual' | 'Cash'
  reportInput: 'Unknown' | 'Indirect' | 'Direct'
  reports: {
    cashPayments?: ReportLine | undefined
    cashReceipts?: ReportLine | undefined
    fromDate?: DateTime | undefined
    toDate?: DateTime | undefined
  }[]
}
type ProfitAndLossReport = {
  currency: string
  earliestAvailableMonth?: DateTime | undefined
  mostRecentAvailableMonth?: DateTime | undefined
  reportBasis: 'Unknown' | 'Accrual' | 'Cash'
  reports: {
    costOfSales?: ReportLine | undefined
    expenses?: ReportLine | undefined
    fromDate?: DateTime | undefined
    grossProfit: number
    income?: ReportLine | undefined
    netOperatingProfit: number
    netOtherIncome: number
    netProfit: number
    otherExpenses?: ReportLine | undefined
    otherIncome?: ReportLine | undefined
    toDate?: DateTime | undefined
  }[]
}
type CompanyDataset = {
  accountingPlatformRef?: (string | null) | undefined
  addresses?:
    | (
        | {
            city?: (string | null) | undefined
            country?: (string | null) | undefined
            line1?: (string | null) | undefined
            line2?: (string | null) | undefined
            postalCode?: (string | null) | undefined
            region?: (string | null) | undefined
            type: unknown
          }[]
        | null
      )
    | undefined
  baseCurrency?: (string | null) | undefined
  companyLegalName?: (string | null) | undefined
  companyName?: (string | null) | undefined
  createdDate?: DateTime | undefined
  financialYearStartDate?: DateTime | undefined
  ledgerLockDate?: DateTime | undefined
  phoneNumbers?: ({ number: string | null; type: unknown }[] | null) | undefined
  registrationNumber?: (string | null) | undefined
  sourceUrls?: ({ [x: string]: string | null } | null) | undefined
  taxNumber?: (string | null) | undefined
  webLinks?:
    | ({ type?: 'Website' | 'Social' | 'Unknown' | undefined; url?: string | undefined }[] | null)
    | undefined
}
type Dataset = {
  companyId: string
  completed?: DateTime | undefined
  connectionId: string
  dataType?: (string | null) | undefined
  datasetLogsUrl?: (string | null) | undefined
  errorMessage?: (string | null) | undefined
  id: string
  isCompleted: boolean
  isErrored: boolean
  progress: number
  requested: DateTime
  status:
    | 'Initial'
    | 'Queued'
    | 'Fetching'
    | 'MapQueued'
    | 'Mapping'
    | 'Complete'
    | 'FetchError'
    | 'MapError'
    | 'InternalError'
    | 'ProcessingQueued'
    | 'Processing'
    | 'ProcessingError'
    | 'ValidationQueued'
    | 'Validating'
    | 'ValidationError'
    | 'AuthError'
    | 'Cancelled'
    | 'NotSupported'
    | 'RateLimitError'
    | 'PermissionsError'
    | 'PrerequisiteNotMet'
  validationInformationUrl?: (string | null) | undefined
}
type Invoices = {
  results?: Invoice[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Items = {
  results?: Item[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type JournalEntries = {
  results?: JournalEntry[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Journals = {
  results?: Journal[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethods = {
  results?: Bill[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PaymentMethod = {
  id?: string | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  type?:
    | 'Unknown'
    | 'Cash'
    | 'Check'
    | 'CreditCard'
    | 'DebitCard'
    | 'BankTransfer'
    | 'Other'
    | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type Payments = {
  results?: Payments[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type PurchaseOrders = {
  results?: PurchaseOrder[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type SalesOrder = {
  currency?: string | undefined
  currencyRate?: (number | null) | undefined
  customerPurchaseOrderNumber?: (string | null) | undefined
  customerRef?: { companyName?: (string | null) | undefined; id: string } | undefined
  expectedDeliveryDate?: DateTime | undefined
  id?: string | undefined
  invoicingStatus?: 'Unknown' | 'PartiallyInvoiced' | 'Invoiced' | 'NotInvoiced' | undefined
  issueDate?: DateTime | undefined
  lineItems?:
    | (
        | {
            accountRef?: { id?: string | undefined; name?: string | undefined } | undefined
            description?: (string | null) | undefined
            discountAmount?: number | undefined
            discountPercentage?: number | undefined
            itemRef?: { id: string; name?: (string | null) | undefined } | undefined
            quantity?: number | undefined
            subTotal?: number | undefined
            taxAmount?: number | undefined
            taxRateRef?:
              | {
                  effectiveTaxRate?: number | undefined
                  id?: string | undefined
                  name?: string | undefined
                }
              | undefined
            totalAmount?: number | undefined
            tracking?:
              | {
                  recordRefs?:
                    | ({ dataType?: string | undefined; id?: string | undefined }[] | null)
                    | undefined
                }
              | undefined
            unitAmount?: number | undefined
          }[]
        | null
      )
    | undefined
  metadata?: Metadata | undefined
  note?: (string | null) | undefined
  salesOrderNumber?: (string | null) | undefined
  shipTo?:
    | {
        address?: unknown | undefined
        contact?:
          | {
              email?: (string | null) | undefined
              name?: (string | null) | undefined
              phone?: (string | null) | undefined
            }
          | undefined
      }
    | undefined
  status?: 'Unknown' | 'Draft' | 'Open' | 'Closed' | 'Void' | undefined
  subTotal?: number | undefined
  totalAmount?: number | undefined
  totalDiscount?: number | undefined
  totalTaxAmount?: number | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type SalesOrders = {
  results?: SalesOrder[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type Suppliers = {
  results?: Supplier[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TaxRate = {
  code?: (string | null) | undefined
  components?:
    | (
        | {
            isCompound: boolean
            name?: (string | null) | undefined
            rate?: (number | null) | undefined
          }[]
        | null
      )
    | undefined
  effectiveTaxRate?: (number | null) | undefined
  id?: string | undefined
  metadata?: Metadata | undefined
  name?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  totalTaxRate?: (number | null) | undefined
  validDatatypeLinks?: (ValidDataTypeLinks[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TaxRates = {
  results?: TaxRate[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TrackingCategory = {
  hasChildren?: boolean | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type TrackingCategories = {
  results?: TrackingCategory[] | undefined
  _links: Links
  pageNumber: number
  pageSize: number
  totalResults: number
}
type TrackingCategoryTree = {
  hasChildren?: boolean | undefined
  id?: (string | null) | undefined
  name?: (string | null) | undefined
  parentId?: (string | null) | undefined
  status?: 'Unknown' | 'Active' | 'Archived' | undefined
  subCategories?: (TrackingCategoryTree[] | null) | undefined
  modifiedDate?: DateTime | undefined
  sourceModifiedDate?: DateTime | undefined
}
type AgedCreditorReport = {
  data?:
    | {
        agedCurrencyOutstanding?:
          | {
              agedOutstandingAmounts?:
                | {
                    amount?: number | undefined
                    details?:
                      | { amount?: number | undefined; name?: string | undefined }[]
                      | undefined
                    fromDate?: DateTime | undefined
                    toDate?: DateTime | undefined
                  }[]
                | undefined
              currency?: string | undefined
            }[]
          | undefined
        supplierId?: string | undefined
        supplierName?: string | undefined
      }[]
    | undefined
  generated?: DateTime | undefined
  reportDate?: DateTime | undefined
}
type AgedDebtorReport = {
  data?:
    | {
        agedCurrencyOutstanding?:
          | {
              agedOutstandingAmounts?:
                | {
                    amount?: number | undefined
                    details?:
                      | { amount?: number | undefined; name?: string | undefined }[]
                      | undefined
                    fromDate?: DateTime | undefined
                    toDate?: DateTime | undefined
                  }[]
                | undefined
              currency?: string | undefined
            }[]
          | undefined
        customerId?: string | undefined
        customerName?: string | undefined
      }[]
    | undefined
  generated?: DateTime | undefined
  reportDate?: DateTime | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/companies/:companyId/connections/:connectionId/data/accountTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: AccountTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/accountTransactions/:accountTransactionId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountTransactionId: string } }
        output: AccountTransaction
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankAccounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string; connectionId: string } }
        output: BankAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments': {
      $get: {
        input: { param: { billId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId': {
      $get: {
        input: {
          param: { attachmentId: string; billId: string; companyId: string; connectionId: string }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/bills/:billId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: { attachmentId: string; billId: string; companyId: string; connectionId: string }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; customerId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            customerId: string
            attachmentId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/customers/:customerId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            customerId: string
            attachmentId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: DirectCosts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } }
        output: DirectCost
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directCostId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directCosts/:directCostId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directCostId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: DirectIncomes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId': {
      $get: {
        input: { param: { directIncomeId: string; companyId: string; connectionId: string } }
        output: DirectIncome
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments': {
      $get: {
        input: { param: { companyId: string; connectionId: string; directIncomeId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            companyId: string
            connectionId: string
            directIncomeId: string
            attachmentId: string
          }
        } & { query: { timeoutInMinutes?: number | undefined } }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/directIncomes/:directIncomeId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            attachmentId: string
            companyId: string
            connectionId: string
            directIncomeId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments': {
      $get: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            invoiceId: string
            attachmentId: string
            companyId: string
            connectionId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/invoices/:invoiceId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            invoiceId: string
            attachmentId: string
            companyId: string
            connectionId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments': {
      $get: {
        input: { param: { supplierId: string; companyId: string; connectionId: string } }
        output: AttachmentsDataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId': {
      $get: {
        input: {
          param: {
            supplierId: string
            companyId: string
            connectionId: string
            attachmentId: string
          }
        }
        output: Attachment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/suppliers/:supplierId/attachments/:attachmentId/download': {
      $get: {
        input: {
          param: {
            supplierId: string
            companyId: string
            connectionId: string
            attachmentId: string
          }
        }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/transfers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Transfers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/data/transfers/:transferId': {
      $get: {
        input: { param: { companyId: string; connectionId: string; transferId: string } }
        output: Transfer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bankAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bankAccounts/:accountId/bankTransactions': {
      $get: {
        input: { param: { companyId: string; connectionId: string; accountId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/billCreditNotes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/billPayments': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/bills': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/chartOfAccounts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/creditNotes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/customers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/directCosts': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/directIncomes': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/invoices': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/items': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/journalEntries': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/journals': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/payments': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/purchaseOrders': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/suppliers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/options/transfers': {
      $get: {
        input: { param: { companyId: string; connectionId: string } }
        output: PushOption
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/accounts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Account }
        output: CreateAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: {
            allowSyncOnPushComplete?: boolean | undefined
            timeoutInMinutes?: number | undefined
          }
        } & { json: BankAccount }
        output: CreateBankAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:accountId/bankTransactions': {
      $post: {
        input: { param: { companyId: string; connectionId: string; accountId: string } } & {
          query: {
            allowSyncOnPushComplete?: boolean | undefined
            timeoutInMinutes?: number | undefined
          }
        } & { json: BankTransactions }
        output: CreateBankTransactionsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bankAccounts/:bankAccountId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; bankAccountId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: BankAccount }
        output: UpdateBankAccountResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: BillCreditNote }
        output: CreateBillCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billCreditNotes/:billCreditNoteId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; billCreditNoteId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: BillCreditNote }
        output: UpdateBillCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billPayments': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: BillPayment }
        output: CreateBillPaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/billPayments/:billPaymentId': {
      $delete: {
        input: { param: { companyId: string; connectionId: string; billPaymentId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Bill }
        output: CreateBillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills/:billId': {
      $delete: {
        input: { param: { billId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { billId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Bill }
        output: UpdateBillResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/bills/:billId/attachments': {
      $post: {
        input: { param: { billId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/creditNotes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: CreditNote }
        output: CreateCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/creditNotes/:creditNoteId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; creditNoteId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: CreditNote }
        output: UpdateCreditNoteResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/customers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Customer }
        output: CreateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/customers/:customerId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; customerId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Customer }
        output: UpdateCustomerResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directCosts': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: DirectCost }
        output: CreateDirectCostResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directCosts/:directCostId/attachment': {
      $post: {
        input: { param: { companyId: string; connectionId: string; directCostId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directIncomes': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: DirectIncome }
        output: CreateDirectIncomeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/directIncomes/:directIncomeId/attachment': {
      $post: {
        input: { param: { directIncomeId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Invoice }
        output: CreateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId': {
      $delete: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Invoice }
        output: UpdateInvoiceResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/invoices/:invoiceId/attachment': {
      $post: {
        input: { param: { invoiceId: string; companyId: string; connectionId: string } } & {
          form: { [x: string]: unknown }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/items': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Item }
        output: CreateItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journalEntries': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: JournalEntry }
        output: CreateJournalEntryResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journalEntries/:journalEntryId': {
      $delete: {
        input: { param: { journalEntryId: string; companyId: string; connectionId: string } }
        output: PushOperationSummary
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/journals': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Journal }
        output: {
          data?: Journal | undefined
          changes?:
            | (
                | {
                    attachmentId?: (string | null) | undefined
                    recordRef?:
                      | { dataType?: DataType | undefined; id?: string | undefined }
                      | undefined
                    type?:
                      | 'Unknown'
                      | 'Created'
                      | 'Modified'
                      | 'Deleted'
                      | 'AttachmentUploaded'
                      | undefined
                  }[]
                | null
              )
            | undefined
          companyId: string
          completedOnUtc?: DateTime | undefined
          dataConnectionKey: string
          dataType?: DataType | undefined
          errorMessage?: (string | null) | undefined
          pushOperationKey: string
          requestedOnUtc: DateTime
          status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
          statusCode: number
          timeoutInMinutes?: (number | null) | undefined
          timeoutInSeconds?: (number | null) | undefined
          validation?:
            | {
                errors?:
                  | (
                      | {
                          itemId?: (string | null) | undefined
                          message?: (string | null) | undefined
                          validatorName?: (string | null) | undefined
                        }[]
                      | null
                    )
                  | undefined
                warnings?:
                  | (
                      | {
                          itemId?: (string | null) | undefined
                          message?: (string | null) | undefined
                          validatorName?: (string | null) | undefined
                        }[]
                      | null
                    )
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/payments': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Payment }
        output: CreatePaymentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: PurchaseOrder }
        output: CreatePurchaseOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/purchaseOrders/:purchaseOrderId': {
      $put: {
        input: { param: { companyId: string; connectionId: string; purchaseOrderId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: PurchaseOrder }
        output: UpdatePurchaseOrderResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/suppliers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined }
        } & { json: Supplier }
        output: CreateSupplierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/suppliers/:supplierId': {
      $put: {
        input: { param: { supplierId: string; companyId: string; connectionId: string } } & {
          query: { timeoutInMinutes?: number | undefined; forceUpdate?: boolean | undefined }
        } & { json: Supplier }
        output: {
          data?: Supplier | undefined
          changes?:
            | (
                | {
                    attachmentId?: (string | null) | undefined
                    recordRef?:
                      | { dataType?: DataType | undefined; id?: string | undefined }
                      | undefined
                    type?:
                      | 'Unknown'
                      | 'Created'
                      | 'Modified'
                      | 'Deleted'
                      | 'AttachmentUploaded'
                      | undefined
                  }[]
                | null
              )
            | undefined
          companyId: string
          completedOnUtc?: DateTime | undefined
          dataConnectionKey: string
          dataType?: DataType | undefined
          errorMessage?: (string | null) | undefined
          pushOperationKey: string
          requestedOnUtc: DateTime
          status: 'Pending' | 'Failed' | 'Success' | 'TimedOut'
          statusCode: number
          timeoutInMinutes?: (number | null) | undefined
          timeoutInSeconds?: (number | null) | undefined
          validation?:
            | {
                errors?:
                  | (
                      | {
                          itemId?: (string | null) | undefined
                          message?: (string | null) | undefined
                          validatorName?: (string | null) | undefined
                        }[]
                      | null
                    )
                  | undefined
                warnings?:
                  | (
                      | {
                          itemId?: (string | null) | undefined
                          message?: (string | null) | undefined
                          validatorName?: (string | null) | undefined
                        }[]
                      | null
                    )
                  | undefined
              }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/connections/:connectionId/push/transfers': {
      $post: {
        input: { param: { companyId: string; connectionId: string } } & { json: Transfer }
        output: CreateTransferResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/accounts': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Accounts
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/accounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string } }
        output: Account
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bankAccounts/:accountId': {
      $get: {
        input: { param: { companyId: string; accountId: string } } & {
          query: { query?: string | undefined }
        }
        output: BankStatementAccount
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bankAccounts/:accountId/transactions': {
      $get: {
        input: { param: { companyId: string; accountId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BankAccountTransactions
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billCreditNotes': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BillCreditNotes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billCreditNotes/:billCreditNoteId': {
      $get: {
        input: { param: { companyId: string; billCreditNoteId: string } }
        output: BillCreditNote
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billPayments': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: BillPayments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/billPayments/:billPaymentId': {
      $get: {
        input: { param: { companyId: string; billPaymentId: string } }
        output: BillPayment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bills': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Bills
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/bills/:billId': {
      $get: {
        input: { param: { billId: string; companyId: string } }
        output: Bill
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/creditNotes': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: CreditNotes
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/creditNotes/:creditNoteId': {
      $get: {
        input: { param: { companyId: string; creditNoteId: string } }
        output: CreditNote
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/customers': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Customers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/customers/:customerId': {
      $get: {
        input: { param: { companyId: string; customerId: string } }
        output: Customer
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/balanceSheet': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: BalanceSheet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/cashFlowStatement': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: CashFlowStatement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/financials/profitAndLoss': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            periodLength: number
            periodsToCompare: number
            startMonth?: DateTime | undefined
          }
        }
        output: ProfitAndLossReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/info': {
      $get: {
        input: { param: { companyId: string } }
        output: CompanyDataset
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { companyId: string } }
        output: Dataset
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Invoices
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices/:invoiceId': {
      $get: {
        input: { param: { invoiceId: string; companyId: string } }
        output: Invoice
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/invoices/:invoiceId/pdf': {
      $get: {
        input: { param: { invoiceId: string; companyId: string } }
        output: { [x: string]: unknown }
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/items': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Items
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/items/:itemId': {
      $get: {
        input: { param: { itemId: string; companyId: string } }
        output: Item
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journalEntries': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: JournalEntries
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journalEntries/:journalEntryId': {
      $get: {
        input: { param: { journalEntryId: string; companyId: string } }
        output: JournalEntry
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journals': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Journals
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/journals/:journalId': {
      $get: {
        input: { param: { journalId: string; companyId: string } }
        output: Journal
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/paymentMethods': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: PaymentMethods
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/paymentMethods/:paymentMethodId': {
      $get: {
        input: { param: { companyId: string; paymentMethodId: string } }
        output: PaymentMethod
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/payments': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Payments
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/payments/:paymentId': {
      $get: {
        input: { param: { paymentId: string; companyId: string } }
        output: Payment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/purchaseOrders': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: PurchaseOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/purchaseOrders/:purchaseOrderId': {
      $get: {
        input: { param: { purchaseOrderId: string; companyId: string } }
        output: PurchaseOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/salesOrders': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: SalesOrders
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/salesOrders/:salesOrderId': {
      $get: {
        input: { param: { salesOrderId: string; companyId: string } }
        output: SalesOrder
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/suppliers': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: Suppliers
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/suppliers/:supplierId': {
      $get: {
        input: { param: { supplierId: string; companyId: string } }
        output: Supplier
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/taxRates': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: TaxRates
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/taxRates/:taxRateId': {
      $get: {
        input: { param: { companyId: string; taxRateId: string } }
        output: TaxRate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/trackingCategories': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            page: number
            pageSize?: number | undefined
            query?: string | undefined
            orderBy?: string | undefined
          }
        }
        output: TrackingCategories
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/data/trackingCategories/:trackingCategoryId': {
      $get: {
        input: { param: { companyId: string; trackingCategoryId: string } }
        output: TrackingCategoryTree
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedCreditor': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            reportDate?: string | undefined
            numberOfPeriods?: number | undefined
            periodLengthDays?: number | undefined
          }
        }
        output: AgedCreditorReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedCreditor/available': {
      $get: {
        input: { param: { companyId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedDebtor': {
      $get: {
        input: { param: { companyId: string } } & {
          query: {
            reportDate?: string | undefined
            numberOfPeriods?: number | undefined
            periodLengthDays?: number | undefined
          }
        }
        output: AgedDebtorReport
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/companies/:companyId/reports/agedDebtor/available': {
      $get: {
        input: { param: { companyId: string } }
        output: boolean
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
