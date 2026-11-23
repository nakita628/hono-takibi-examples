type DefaultResponseDTOOfInteger = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: number | undefined
}
type Exception = {
  InnerException?: Exception | undefined
  Message?: string | undefined
  Source?: (string | null) | undefined
  StackTrace?: (string | null) | undefined
}
type ValidationError = {
  field?: (string | null) | undefined
  message?: (string | null) | undefined
}
type ApiException = {
  InnerException?: Exception | undefined
  Message?: string | undefined
  Source?: (string | null) | undefined
  StackTrace?: (string | null) | undefined
  customError?: ({ [x: string]: unknown } | null) | undefined
  errors?: (ValidationError[] | null) | undefined
  isCustomErrorObject?: boolean | undefined
  isModelValidatonError?: boolean | undefined
  referenceDocumentLink?: (string | null) | undefined
  referenceErrorCode?: (string | null) | undefined
  statusCode?: number | undefined
}
type GymDTO = {
  externalGymNumber?: number | undefined
  gymId?: number | undefined
  gymName?: (string | null) | undefined
  location?: (string | null) | undefined
}
type GymArticleDetailsDTO = {
  articleId?: number | undefined
  availableQty?: number | undefined
  createdUser?: (string | null) | undefined
  employeeDiscount?: number | undefined
  employeePrice?: number | undefined
  gymId?: number | undefined
  gymIdList?: (string | null) | undefined
  gymName?: (string | null) | undefined
  id?: number | undefined
  isDefault?: boolean | undefined
  isInventoryItem?: boolean | undefined
  isObsolete?: boolean | undefined
  modifiedUser?: (string | null) | undefined
  reorderLevel?: number | undefined
  revenueAccountId?: number | undefined
  sellingPrice?: number | undefined
}
type ArticleDTO = {
  activeStatus?: boolean | undefined
  applyForAllGyms?: boolean | undefined
  articleId?: number | undefined
  availableGyms: GymDTO[]
  availableQty?: number | undefined
  barcode?: (string | null) | undefined
  createdDate?: string | undefined
  createdUser?: (string | null) | undefined
  cronExpression?: (string | null) | undefined
  description?: (string | null) | undefined
  discount?: number | undefined
  employeeDiscount?: number | undefined
  employeePrice?: number | undefined
  gymArticles?: (GymArticleDetailsDTO[] | null) | undefined
  isAddOn?: boolean | undefined
  isInventoryItem?: boolean | undefined
  isObsolete?: boolean | undefined
  measureUnit: string
  modifiedDate?: string | undefined
  modifiedUser?: (string | null) | undefined
  name: string
  number?: number | undefined
  price: number
  reorderLevel?: number | undefined
  revenueAccountId?: number | undefined
  sellingPrice?: number | undefined
  tags?: (string | null) | undefined
  type: string
  vat?: number | undefined
  vatApplicable?: boolean | undefined
}
type StatusDTO = {
  messageId?: (string | null) | undefined
  statusText?: (string | null) | undefined
  url?: (string | null) | undefined
}
type DefaultResponseDTOOfStatusDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: StatusDTO | undefined
}
type ApiResponse = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: ({ [x: string]: unknown } | null) | undefined
  statusCode?: number | undefined
  version?: (string | null) | undefined
}
type ArticleSearchDTO = {
  activeStatus?: boolean | undefined
  applyForAllGyms?: boolean | undefined
  articleId?: number | undefined
  createdDate?: string | undefined
  createdUser?: (string | null) | undefined
  description?: (string | null) | undefined
  measureUnit?: (string | null) | undefined
  modifiedDate?: string | undefined
  modifiedUser?: (string | null) | undefined
  name?: (string | null) | undefined
  number?: number | undefined
  price?: number | undefined
  sellingPrice?: number | undefined
  tags?: (string | null) | undefined
  totalCount?: number | undefined
  type?: (string | null) | undefined
}
type DefaultResponseDTOOfListOfArticleSearchDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: (ArticleSearchDTO[] | null) | undefined
}
type MeasureUnitDTO = {
  id?: number | undefined
  name?: (string | null) | undefined
  type?: (string | null) | undefined
}
type DefaultResponseDTOOfArticleDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: ArticleDTO | undefined
}
type LoginDTO = {
  password?: (string | null) | undefined
  remember?: boolean | undefined
  username?: (string | null) | undefined
}
type DefaultResponseDTOOfGymDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: GymDTO | undefined
}
type MemberDTO = { name?: (string | null) | undefined }
type ProblemDetails = {
  detail?: (string | null) | undefined
  extensions?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  instance?: (string | null) | undefined
  status?: (number | null) | undefined
  title?: (string | null) | undefined
  type?: (string | null) | undefined
}
type DefaultResponseDTOOfBoolean = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: boolean | undefined
}
type DefaultResponseDTOOfString = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: (string | null) | undefined
}
type PackageItemDTO = {
  articleId: number
  articleName?: (string | null) | undefined
  articleNumber?: number | undefined
  articlePrice?: number | undefined
  endOrder?: number | undefined
  isIncludeServiceInCharge?: boolean | undefined
  measureUnit?: (string | null) | undefined
  numberOfItems?: number | undefined
  startOrder?: number | undefined
}
type PackageDTO = {
  addOns?: (PackageItemDTO[] | null) | undefined
  addonFee?: number | undefined
  applyForAllGyms?: boolean | undefined
  availableGyms?: (GymDTO[] | null) | undefined
  bindingPeriod?: number | undefined
  createdDate?: string | undefined
  createdUser?: (string | null) | undefined
  description?: (string | null) | undefined
  endDate?: string | undefined
  expireInMonths?: number | undefined
  features?: (string | null) | undefined
  freeMonths?: number | undefined
  instructionsToGymUsers?: (string | null) | undefined
  instructionsToWebUsers?: (string | null) | undefined
  isActive?: boolean | undefined
  isAtg?: boolean | undefined
  isAutoRenew?: boolean | undefined
  isFirstMonthFree?: boolean | undefined
  isRegistrationFee?: boolean | undefined
  isRestAmount?: boolean | undefined
  isShownInMobile?: boolean | undefined
  isSponsorPackage?: boolean | undefined
  maximumGiveAwayRestAmount?: number | undefined
  memberCanAddAddOns?: boolean | undefined
  memberCanLeaveWithinFreePeriod?: boolean | undefined
  memberCanRemoveAddOns?: boolean | undefined
  modifiedDate?: string | undefined
  modifiedUser?: (string | null) | undefined
  monthlyFee?: number | undefined
  nextPackageNumber?: number | undefined
  numberOfInstallments?: number | undefined
  numberOfVisits?: number | undefined
  packageId?: number | undefined
  packageName: string
  packageNumber?: (string | null) | undefined
  packageType: string
  perVisitPrice?: number | undefined
  registrationFee: number
  serviceFee: number
  shownInWeb?: boolean | undefined
  startDate?: string | undefined
  tags?: (string | null) | undefined
  totalPrice?: number | undefined
}
type DefaultResponseDTOOfPackageDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: PackageDTO | undefined
}
type PackageSearchDTO = {
  activeStatus?: boolean | undefined
  addonFee?: number | undefined
  applyForAllGyms?: boolean | undefined
  bindingPeriod?: number | undefined
  createdDate?: string | undefined
  createdUser?: (string | null) | undefined
  description?: (string | null) | undefined
  features?: (string | null) | undefined
  freeMonths?: number | undefined
  memberCanRemoveAddOns?: boolean | undefined
  modifiedDate?: string | undefined
  modifiedUser?: (string | null) | undefined
  monthlyFee?: number | undefined
  numberOfVisits?: number | undefined
  packageId?: number | undefined
  packageName?: (string | null) | undefined
  packageNumber?: number | undefined
  packageType?: (string | null) | undefined
  registrationFee?: number | undefined
  serviceFee?: number | undefined
  tags?: (string | null) | undefined
  totalCount?: number | undefined
  totalPrice?: number | undefined
}
type DefaultResponseDTOOfPackageSearchDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: PackageSearchDTO | undefined
}
type DefaultResponseDTOOfListOfPackageSearchDTO = {
  isError?: boolean | undefined
  message?: (string | null) | undefined
  responseException?: ({ [x: string]: unknown } | null) | undefined
  result?: (PackageSearchDTO[] | null) | undefined
}
type MessageStatus = {
  messageId?: (string | null) | undefined
  referenceId?: number | undefined
  source?: ({ [x: string]: unknown } | null) | undefined
  statusId?: number | undefined
  statusText?: (string | null) | undefined
}
type TestDTO = { id?: number | undefined }
type UserDTO = {
  accountNumber?: (string | null) | undefined
  externalEntityNumber?: (string | null) | undefined
  guardian?: number | undefined
  gymNumber?: (string | null) | undefined
  introduceBy?: number | undefined
  name?: (string | null) | undefined
  number?: (string | null) | undefined
  typeId?: number | undefined
  userId?: number | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Article': {
      $delete:
        | {
            input: { query: { ArticleId?: number | undefined } }
            output: DefaultResponseDTOOfInteger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { ArticleId?: number | undefined } }
            output: DefaultResponseDTOOfInteger
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { ArticleId?: number | undefined } }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: ArticleDTO }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: ArticleDTO }; output: ApiResponse; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { json: ArticleDTO }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: ArticleDTO }; output: ApiException; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/Article/ArticleGymDetails': {
      $put:
        | {
            input: { json: GymArticleDetailsDTO[] }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: GymArticleDetailsDTO[] }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/GetAddons': {
      $get:
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymIds?: (string | null) | undefined
                type?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: DefaultResponseDTOOfListOfArticleSearchDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymIds?: (string | null) | undefined
                type?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: DefaultResponseDTOOfListOfArticleSearchDTO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymIds?: (string | null) | undefined
                type?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
              }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/GymArticle/:articleId/:gymId': {
      $get:
        | {
            input: { param: { articleId: number; gymId: number } }
            output: GymArticleDetailsDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { articleId: number; gymId: number } }
            output: DefaultResponseDTOOfListOfArticleSearchDTO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { articleId: number; gymId: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/MeasureUnit': {
      $post:
        | {
            input: { json: MeasureUnitDTO[] }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { json: MeasureUnitDTO[] }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/MeasureUnits': {
      $get:
        | {
            input: { query: { type?: (string | null) | undefined } }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { type?: (string | null) | undefined } }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/RevenueAccounts': {
      $get:
        | { input: {}; output: DefaultResponseDTOOfStatusDTO; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ApiResponse; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/Article/Search': {
      $get:
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
              }
            }
            output: DefaultResponseDTOOfListOfArticleSearchDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
              }
            }
            output: DefaultResponseDTOOfListOfArticleSearchDTO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
              }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/UpdateStatus': {
      $put:
        | {
            input: {
              query: {
                ArticleId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: DefaultResponseDTOOfInteger
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                ArticleId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: DefaultResponseDTOOfInteger
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                ArticleId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Article/:articleID': {
      $get:
        | {
            input: { param: { articleID: number } }
            output: DefaultResponseDTOOfArticleDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { articleID: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/Auth/login': {
      $post: { input: { json: LoginDTO }; output: File; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Gym/:gymID': {
      $get:
        | {
            input: { param: { gymID: number } }
            output: DefaultResponseDTOOfGymDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { gymID: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/Membership': {
      $get:
        | { input: {}; output: MemberDTO[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ProblemDetails; outputFormat: 'json'; status: 404 }
      $post:
        | { input: { json: MemberDTO }; output: boolean; outputFormat: 'json'; status: 200 }
        | { input: { json: MemberDTO }; output: ProblemDetails; outputFormat: 'json'; status: 404 }
    }
  } & {
    '/api/Package': {
      $delete:
        | {
            input: { query: { PackageId?: number | undefined } }
            output: DefaultResponseDTOOfBoolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { PackageId?: number | undefined } }
            output: DefaultResponseDTOOfString
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { PackageId?: number | undefined } }
            output: DefaultResponseDTOOfString
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { PackageId?: number | undefined } }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { packageId?: number | undefined } }
            output: DefaultResponseDTOOfPackageDTO
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { packageId?: number | undefined } }
            output: DefaultResponseDTOOfPackageDTO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { query: { packageId?: number | undefined } }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
      $post:
        | {
            input: { json: PackageDTO }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: PackageDTO }; output: ApiException; outputFormat: 'json'; status: 500 }
      $put:
        | {
            input: { json: PackageDTO }
            output: DefaultResponseDTOOfStatusDTO
            outputFormat: 'json'
            status: 202
          }
        | { input: { json: PackageDTO }; output: ApiException; outputFormat: 'json'; status: 500 }
    }
  } & {
    '/api/Package/Search': {
      $get:
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
                categoryId?: number | undefined
                startpPrice?: number | undefined
                endPrice?: number | undefined
                requestSource?: number | undefined
              }
            }
            output: DefaultResponseDTOOfPackageSearchDTO[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
                categoryId?: number | undefined
                startpPrice?: number | undefined
                endPrice?: number | undefined
                requestSource?: number | undefined
              }
            }
            output: DefaultResponseDTOOfListOfPackageSearchDTO
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                searchText?: (string | null) | undefined
                gymId?: number | undefined
                type?: (string | null) | undefined
                orderBy?: (string | null) | undefined
                limit?: number | undefined
                offset?: number | undefined
                activeStatus?: number | undefined
                categoryId?: number | undefined
                startpPrice?: number | undefined
                endPrice?: number | undefined
                requestSource?: number | undefined
              }
            }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Package/UpdateStatus': {
      $put:
        | {
            input: {
              query: {
                packageId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: DefaultResponseDTOOfBoolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                packageId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: DefaultResponseDTOOfString
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                packageId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: DefaultResponseDTOOfString
            outputFormat: 'json'
            status: 404
          }
        | {
            input: {
              query: {
                packageId?: number | undefined
                status?: number | undefined
                userName?: (string | null) | undefined
              }
            }
            output: ApiException
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/api/Status': {
      $get:
        | {
            input: { query: { messageId?: (string | null) | undefined } }
            output: MessageStatus
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { messageId?: (string | null) | undefined } }
            output: ProblemDetails
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/api/Test': { $get: { input: {}; output: TestDTO; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/User': { $get: { input: {}; output: UserDTO; outputFormat: 'json'; status: 200 } }
  } & {
    '/api/User/registerUser': {
      $post:
        | {
            input: {
              query: {
                UserId?: number | undefined
                AccountNumber?: (string | null) | undefined
                GymNumber?: (string | null) | undefined
                ExternalEntityNumber?: (string | null) | undefined
                Name?: (string | null) | undefined
                Number?: (string | null) | undefined
                IntroduceBy?: number | undefined
                Guardian?: number | undefined
                TypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                UserId?: number | undefined
                AccountNumber?: (string | null) | undefined
                GymNumber?: (string | null) | undefined
                ExternalEntityNumber?: (string | null) | undefined
                Name?: (string | null) | undefined
                Number?: (string | null) | undefined
                IntroduceBy?: number | undefined
                Guardian?: number | undefined
                TypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/User/updateuser': {
      $put:
        | {
            input: {
              query: {
                UserId?: number | undefined
                AccountNumber?: (string | null) | undefined
                GymNumber?: (string | null) | undefined
                ExternalEntityNumber?: (string | null) | undefined
                Name?: (string | null) | undefined
                Number?: (string | null) | undefined
                IntroduceBy?: number | undefined
                Guardian?: number | undefined
                TypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: {
              query: {
                UserId?: number | undefined
                AccountNumber?: (string | null) | undefined
                GymNumber?: (string | null) | undefined
                ExternalEntityNumber?: (string | null) | undefined
                Name?: (string | null) | undefined
                Number?: (string | null) | undefined
                IntroduceBy?: number | undefined
                Guardian?: number | undefined
                TypeId?: number | undefined
              }
            }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
