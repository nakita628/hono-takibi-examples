import { createRoute, z } from '@hono/zod-openapi'

type ExceptionType = {
  InnerException?: ExceptionType | null
  Message?: string
  Source?: string | null
  StackTrace?: string | null
}

const ExceptionSchema: z.ZodType<ExceptionType> = z
  .lazy(() =>
    z
      .strictObject({
        InnerException: z.xor([ExceptionSchema]).nullable().exactOptional(),
        Message: z.string().exactOptional(),
        Source: z.string().nullable().exactOptional(),
        StackTrace: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('Exception')

const ValidationErrorSchema = z
  .strictObject({
    field: z.string().nullable().exactOptional(),
    message: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ValidationError')

const ApiExceptionSchema = ExceptionSchema.and(
  z
    .strictObject({
      customError: z.any().nullable().exactOptional(),
      errors: z.array(ValidationErrorSchema).nullable().exactOptional(),
      isCustomErrorObject: z.boolean().exactOptional(),
      isModelValidatonError: z.boolean().exactOptional(),
      referenceDocumentLink: z.string().nullable().exactOptional(),
      referenceErrorCode: z.string().nullable().exactOptional(),
      statusCode: z.int32().exactOptional(),
    })
    .openapi({ required: [] }),
).openapi('ApiException')

const ApiResponseSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.any().nullable().exactOptional(),
    statusCode: z.int32().exactOptional(),
    version: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ApiResponse')

const GymDTOSchema = z
  .strictObject({
    externalGymNumber: z.int32().exactOptional(),
    gymId: z.int32().exactOptional(),
    gymName: z.string().nullable().exactOptional(),
    location: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      "The GymDTO Class.\nContains relevant fields of Gym DTO by masking actual Gym entity's fields in application.\n            ",
    required: [],
  })
  .openapi('GymDTO')

const GymArticleDetailsDTOSchema = z
  .strictObject({
    articleId: z.int32().exactOptional(),
    availableQty: z.number().exactOptional(),
    createdUser: z.string().nullable().exactOptional().openapi({ description: 'Created User ' }),
    employeeDiscount: z.number().exactOptional(),
    employeePrice: z.number().exactOptional(),
    gymId: z.int32().exactOptional().openapi({ description: 'Gym Id where article is related ' }),
    gymIdList: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'GymId - Gym Id string with comma separated GymIds ' }),
    gymName: z.string().nullable().exactOptional().openapi({ description: 'Gym Name' }),
    id: z.int32().exactOptional(),
    isDefault: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Set as the default values for the article ' }),
    isInventoryItem: z.boolean().exactOptional(),
    isObsolete: z.boolean().exactOptional(),
    modifiedUser: z.string().nullable().exactOptional().openapi({ description: 'Modified user' }),
    reorderLevel: z.number().exactOptional(),
    revenueAccountId: z.int32().exactOptional().openapi({ description: 'Revenue account Id' }),
    sellingPrice: z.number().exactOptional(),
  })
  .openapi({
    description:
      'The GymArticleDetailsDTO Class.\nContains fields of GymArticleDetails DTO in application.\n            ',
    required: [],
  })
  .openapi('GymArticleDetailsDTO')

const ArticleDTOSchema = z
  .strictObject({
    activeStatus: z.boolean().exactOptional().openapi({ description: 'Active Status ' }),
    applyForAllGyms: z.boolean().exactOptional(),
    articleId: z.int32().exactOptional(),
    availableGyms: z.array(GymDTOSchema),
    availableQty: z.number().exactOptional().openapi({ description: 'Default AvailableQty' }),
    barcode: z.string().min(0).max(100).nullable().exactOptional(),
    createdDate: z.iso.datetime({ offset: true }).exactOptional(),
    createdUser: z.string().nullable().exactOptional(),
    cronExpression: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Access Schedule CRON Expression ' }),
    description: z.string().nullable().exactOptional(),
    discount: z.number().exactOptional(),
    employeeDiscount: z
      .number()
      .exactOptional()
      .openapi({ description: 'Default EmployeeDiscount' }),
    employeePrice: z.number().exactOptional().openapi({ description: 'Default EmployeePrice' }),
    gymArticles: z
      .array(GymArticleDetailsDTOSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gym Customizations ' }),
    isAddOn: z.boolean().exactOptional(),
    isInventoryItem: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Default IsInventoryItem of the Article ' }),
    isObsolete: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Default IsObsolete of the Article ' }),
    measureUnit: z.string().min(1),
    modifiedDate: z.iso.datetime({ offset: true }).exactOptional(),
    modifiedUser: z.string().nullable().exactOptional(),
    name: z.string().min(0).max(100),
    number: z.int32().exactOptional(),
    price: z.number(),
    reorderLevel: z.number().exactOptional().openapi({ description: 'Deafault ReorderLevel' }),
    revenueAccountId: z.int32().exactOptional().openapi({ description: 'Default Revenue account' }),
    sellingPrice: z.number().exactOptional().openapi({ description: 'Default SellingPrice' }),
    tags: z.string().min(0).max(200).nullable().exactOptional(),
    type: z
      .string()
      .regex(/item|service|access/)
      .min(1),
    vat: z.number().exactOptional(),
    vatApplicable: z.boolean().exactOptional().openapi({ description: 'VAT Applicable ' }),
  })
  .openapi({
    description:
      "The ArticleDTO Class.\nContains relevant fields of Article DTO by masking actual Article entity's fields in application.\n            ",
    required: ['name', 'type', 'price', 'measureUnit', 'availableGyms'],
  })
  .openapi('ArticleDTO')

const ArticleSearchDTOSchema = z
  .strictObject({
    activeStatus: z.boolean().exactOptional().openapi({ description: 'Active Status ' }),
    applyForAllGyms: z.boolean().exactOptional(),
    articleId: z.int32().exactOptional(),
    createdDate: z.iso.datetime({ offset: true }).exactOptional(),
    createdUser: z.string().nullable().exactOptional(),
    description: z.string().nullable().exactOptional(),
    measureUnit: z.string().nullable().exactOptional().openapi({ description: 'MeasureUnit ' }),
    modifiedDate: z.iso.datetime({ offset: true }).exactOptional(),
    modifiedUser: z.string().nullable().exactOptional(),
    name: z.string().nullable().exactOptional(),
    number: z.int32().exactOptional(),
    price: z.number().exactOptional(),
    sellingPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'Actual Selling price of the article ' }),
    tags: z.string().nullable().exactOptional(),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'total number of recode for particular search ' }),
    type: z.string().nullable().exactOptional().openapi({ description: 'article type' }),
  })
  .openapi({
    description:
      "The ArticleSearchDTO Class.\nContains relevant fields of ArticleSearch DTO by masking actual Article entity's fields in application.\n            ",
    required: [],
  })
  .openapi('ArticleSearchDTO')

const DefaultResponseDTOOfArticleDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.xor([ArticleDTOSchema]).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfArticleDTO')

const DefaultResponseDTOOfBooleanSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.boolean().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfBoolean')

const DefaultResponseDTOOfGymDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.xor([GymDTOSchema]).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfGymDTO')

const DefaultResponseDTOOfIntegerSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.int32().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfInteger')

const DefaultResponseDTOOfListOfArticleSearchDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.array(ArticleSearchDTOSchema).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfListOfArticleSearchDTO')

const PackageSearchDTOSchema = z
  .strictObject({
    activeStatus: z.boolean().exactOptional().openapi({ description: 'Active Status ' }),
    addonFee: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'sum of addon fees.\nincoming values for this filed will ignore.\n            ',
      }),
    applyForAllGyms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate wheather package is available in all the gyms.\n            ',
      }),
    bindingPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Range of period a member is bound to the contract if he/she choose this package.\n            ',
      }),
    createdDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Package created DateTime.\n            ' }),
    createdUser: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Package created user.\n            ' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Common descriptions about package.If there are more instructions can be stored as comma separated values.\n            ',
      }),
    features: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'What are the facilities, features available for package.ex:- wifi, ACm etc.Can be stored as comma seperated values.\n            ',
      }),
    freeMonths: z
      .int32()
      .exactOptional()
      .openapi({ description: 'No of months gym member can come without payments.\n            ' }),
    memberCanRemoveAddOns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate member can remove already added addons if he choose this package.\n            ',
      }),
    modifiedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Package last modified DateTime.\n            ' }),
    modifiedUser: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Package last modified user.\n            ' }),
    monthlyFee: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Monthly installment fee if package is not fixed visit.\naddition of the servicefee and addon fees divided by binding period.\n            ',
      }),
    numberOfVisits: z
      .int32()
      .exactOptional()
      .openapi({ description: 'No of visits for fixed package ' }),
    packageId: z.int32().exactOptional(),
    packageName: z.string().nullable().exactOptional(),
    packageNumber: z.int32().exactOptional(),
    packageType: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Package type can be either fixed visit or unlimited.\n            ',
      }),
    registrationFee: z
      .number()
      .exactOptional()
      .openapi({ description: 'Registartion fee for the package at a gym.\n            ' }),
    serviceFee: z
      .number()
      .exactOptional()
      .openapi({
        description: 'total Service charge of the package for entire period.\n            ',
      }),
    tags: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Comma separated string values in case of need of maintain some labels kind of stuff relevant to the package.\n            ',
      }),
    totalCount: z
      .int32()
      .exactOptional()
      .openapi({ description: 'total number of recode for particular search ' }),
    totalPrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'total price for the package including Addon fees, service fee and registration fee.\nincoming values for this field will ignore.\n            ',
      }),
  })
  .openapi({
    description:
      "The PackageSearchDTO Class.\nContains relevant fields of PackageSearch DTO by masking actual Package entity's fields in application.\n               ",
    required: [],
  })
  .openapi('PackageSearchDTO')

const DefaultResponseDTOOfListOfPackageSearchDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.array(PackageSearchDTOSchema).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfListOfPackageSearchDTO')

const PackageItemDTOSchema = z
  .strictObject({
    articleId: z
      .int32()
      .openapi({ description: 'Refer to ArticleId in Article table in DB.\n            ' }),
    articleName: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Name of the article(Addon) in a particular package.\n             read only\n            ',
      }),
    articleNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Number assigned the article(Addon) in a particular package.\n             read only\n            ',
      }),
    articlePrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Price of the article determined from that package.\nPrice of a same article can be varied from package to package.\n            ',
      }),
    endOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of the installment this article is available to.\n            ',
      }),
    isIncludeServiceInCharge: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Is Included in service charge ' }),
    measureUnit: z.string().nullable().exactOptional(),
    numberOfItems: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'How many article(Addon) is available for that package from that type.\n            ',
      }),
    startOrder: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Number of the installment this article is available from.\n            ',
      }),
  })
  .openapi({
    description:
      "The PackageItemDTO Class.\nContains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.\n            ",
    required: ['articleId'],
  })
  .openapi('PackageItemDTO')

const PackageDTOSchema = z
  .strictObject({
    addOns: z
      .array(PackageItemDTOSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Extra articles list added to the given package.\n            ' }),
    addonFee: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'sum of addon fees.\nincoming values for this filed will ignore.\n            ',
      }),
    applyForAllGyms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate wheather package is available in all the gyms.\n            ',
      }),
    availableGyms: z
      .array(GymDTOSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Gyms list where this package is available.\n            ' }),
    bindingPeriod: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Range of period a member is bound to the contract if he/she choose this package.\n            ',
      }),
    createdDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Package created DateTime.\n            ' }),
    createdUser: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Package created user.\n            ' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Common descriptions about package.If there are more instructions \n             can be stored as comma separated values.\n            ',
      }),
    endDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({
        description:
          'End date of the package.After that package is not valid for use.\n            ',
      }),
    expireInMonths: z
      .int32()
      .exactOptional()
      .openapi({ description: 'No of months the fixed package is valid for sale\n            ' }),
    features: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'What are the facilities, features available for package.ex:- wifi,\nACm etc.Can be stored as comma seperated values.\n            ',
      }),
    freeMonths: z
      .int32()
      .exactOptional()
      .openapi({ description: 'No of months gym member can come without payments.\n            ' }),
    instructionsToGymUsers: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Instruction to the gym members relevant to the package.\n             If there are more instructions can be stored as comma seperated values.\n            ',
      }),
    instructionsToWebUsers: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Instruction to the MRM members relevant to the package.\n             If there are more instructions can be stored as comma seperated values.\n            ',
      }),
    isActive: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value to indicate this package is still active or not.\n            ',
      }),
    isAtg: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate ATG transaction from bank is applicable or not.\n            ',
      }),
    isAutoRenew: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate the contract will auto renew after expiration \n             if this package would be chosen.\n            ',
      }),
    isFirstMonthFree: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value to indicate if the first month charges is free.\n            ',
      }),
    isRegistrationFee: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate this package has registration fee or not.\n            ',
      }),
    isRestAmount: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value to indicate rest amount is applicable or not.\n            ',
      }),
    isShownInMobile: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate package is visible in Mobile App or not.\n            ',
      }),
    isSponsorPackage: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate package can be sponsored or not by other party.\n            ',
      }),
    maximumGiveAwayRestAmount: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'If a member join the gym middle of a month via this package, \n             what is the maximum amount of price can be neglected from payment from the member.\n            ',
      }),
    memberCanAddAddOns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate member can add extra addons he wish if he choose this package.\n            ',
      }),
    memberCanLeaveWithinFreePeriod: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate if member can leave from contract within \n             free period if he/she choose this package.\n            ',
      }),
    memberCanRemoveAddOns: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Boolean value to indicate member can remove already added addons if he choose this package.\n            ',
      }),
    modifiedDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Package last modified DateTime.\n            ' }),
    modifiedUser: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Package last modified user.\n            ' }),
    monthlyFee: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Monthly installment fee if package is not fixed visit.\naddition of the servicefee and addon fees divided by binding period.\n             read only\n            ',
      }),
    nextPackageNumber: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Next Package the contract continue after the binding period of this package.\n            ',
      }),
    numberOfInstallments: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Maximum Number of installment a member can divide the package price/cost to pay.\n            ',
      }),
    numberOfVisits: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'If package is fixed visit type, then how many visits are available for this package.\n            ',
      }),
    packageId: z.int32().exactOptional(),
    packageName: z.string().min(1),
    packageNumber: z.string().nullable().exactOptional(),
    packageType: z
      .string()
      .regex(/fixedvisit|unlimited/)
      .min(1)
      .openapi({
        description: 'Package type can be either fixed visit or unlimited.\n            ',
      }),
    perVisitPrice: z
      .number()
      .exactOptional()
      .openapi({ description: 'Cost/Price of the single visit to gym.\n            ' }),
    registrationFee: z
      .number()
      .openapi({
        description:
          'Registartion fee for the package at a gym.\n             read only\n            ',
      }),
    serviceFee: z
      .number()
      .openapi({
        description: 'total Service charge of the package for entire period.\n            ',
      }),
    shownInWeb: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Boolean value to show this package in MRM system or not.\n            ',
      }),
    startDate: z.iso
      .datetime({ offset: true })
      .exactOptional()
      .openapi({ description: 'Start date of the package.\n            ' }),
    tags: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Comma separated string values in case of need of maintain some labels kind of \n             stuff relevant to the package.\n            ',
      }),
    totalPrice: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'total price for the package including Addon fees, service fee and registration fee.\nincoming values for this field will ignore.\n            ',
      }),
  })
  .openapi({
    description:
      "The PackageDTO Class.\nContains relevant fields of Package DTO by masking actual Package entity's fields in application.\n            ",
    required: ['packageName', 'registrationFee', 'packageType', 'serviceFee'],
  })
  .openapi('PackageDTO')

const DefaultResponseDTOOfPackageDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.xor([PackageDTOSchema]).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfPackageDTO')

const DefaultResponseDTOOfPackageSearchDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.xor([PackageSearchDTOSchema]).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfPackageSearchDTO')

const StatusDTOSchema = z
  .strictObject({
    messageId: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Reference id for status endpoint\n            ' }),
    statusText: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Status of API Call\n            ' }),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Relative url for stauts check\n            ' }),
  })
  .openapi({
    description: 'Imideate response for long running api call.\n            ',
    required: [],
  })
  .openapi('StatusDTO')

const DefaultResponseDTOOfStatusDTOSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.xor([StatusDTOSchema]).nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfStatusDTO')

const DefaultResponseDTOOfStringSchema = z
  .strictObject({
    isError: z.boolean().exactOptional(),
    message: z.string().nullable().exactOptional(),
    responseException: z.any().nullable().exactOptional(),
    result: z.string().nullable().exactOptional(),
  })
  .openapi({
    description:
      'The DefaultResponseDTO Class.\nContains fields of DefaultResponse DTO in application.\n            ',
    required: [],
  })
  .openapi('DefaultResponseDTOOfString')

const LoginDTOSchema = z
  .strictObject({
    password: z.string().nullable().exactOptional(),
    remember: z.boolean().exactOptional(),
    username: z.string().nullable().exactOptional(),
  })
  .openapi({
    description: 'The LoginDTO Class.\nContains relevant fields of Login DTO.\n            ',
    required: [],
  })
  .openapi('LoginDTO')

const MeasureUnitDTOSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ description: 'Id of the table' }),
    name: z.string().nullable().exactOptional().openapi({ description: 'Mesure Unit Type' }),
    type: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Type of the article used with (all, service, item)' }),
  })
  .openapi({ description: 'Mesure unit to represent article mesure unit ', required: [] })
  .openapi('MeasureUnitDTO')

const MemberDTOSchema = z
  .strictObject({ name: z.string().nullable().exactOptional() })
  .openapi({
    description:
      "The MemeberDTO Class.\nContains relevant fields of Member DTO by masking actual Member entity's fields in application.\n            ",
    required: [],
  })
  .openapi('MemberDTO')

const MessageStatusSchema = z
  .strictObject({
    messageId: z.string().nullable().exactOptional(),
    referenceId: z.int32().exactOptional(),
    source: z.any().nullable().exactOptional(),
    statusId: z.int32().exactOptional(),
    statusText: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('MessageStatus')

const ProblemDetailsSchema = z
  .strictObject({
    detail: z.string().nullable().exactOptional(),
    extensions: z.record(z.string(), z.any()).nullable().exactOptional(),
    instance: z.string().nullable().exactOptional(),
    status: z.int32().nullable().exactOptional(),
    title: z.string().nullable().exactOptional(),
    type: z.string().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ProblemDetails')

const TestDTOSchema = z
  .strictObject({
    id: z.int32().exactOptional().openapi({ description: 'Id of the Test object\n            ' }),
  })
  .openapi({
    description:
      "The TestDTO Class.\nContains relevant fields of Test DTO by masking actual Test entity's fields in application.\n            ",
    required: [],
  })
  .openapi('TestDTO')

const UserDTOSchema = z
  .strictObject({
    accountNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Account number of the user.It can be any stakeholder of the application.even can be a gym.\n            ',
      }),
    externalEntityNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Entity number that make a relationship with BOX API DB.\n            ',
      }),
    guardian: z
      .int32()
      .exactOptional()
      .openapi({
        description: 'Gaurdian of the this user if he/she is under 18 years old.\n            ',
      }),
    gymNumber: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If this user is a gym, then the gym number.\n            ' }),
    introduceBy: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          "If Someone introduced this user to the system, then that user's UserId.\n            ",
      }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Name of the user.\n            ' }),
    number: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Unique number maintain by application to idenify user.\n            ',
      }),
    typeId: z.int32().exactOptional().openapi({ description: 'Type of the user.\n            ' }),
    userId: z
      .int32()
      .exactOptional()
      .openapi({
        description:
          'Indentity number(primary key) for user object. Generated in DB table when inserting a record.\n            ',
      }),
  })
  .openapi({
    description:
      "The UserDTO Class.\nContains relevant fields of User DTO by masking actual User entity's fields in application.\n            ",
    required: [],
  })
  .openapi('UserDTO')

const ApikeySecurityScheme = { in: 'header', name: 'Ocp-Apim-Subscription-Key', type: 'apiKey' }

const BearerSecurityScheme = {
  description: 'auth0 authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://tldev.eu.auth0.com/authorize',
      scopes: { 'read:tl_articles': 'read:tl_articles', 'read:tl_packages': 'read:tl_packages' },
      tokenUrl: 'https://tldev.eu.auth0.com/oauth/token',
    },
  },
  type: 'oauth2',
}

export const putApiArticleRoute = createRoute({
  method: 'put',
  path: '/api/Article',
  tags: ['Article'],
  summary: 'update existing article\n            ',
  operationId: 'Article_Put',
  request: {
    body: {
      description: 'article object',
      content: { 'application/json': { schema: ArticleDTOSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'messageId that can use to get the status of import later on.!',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const postApiArticleRoute = createRoute({
  method: 'post',
  path: '/api/Article',
  tags: ['Article'],
  summary: 'Add new article\n            ',
  operationId: 'Article_Post',
  request: {
    body: {
      description: 'article object',
      content: { 'application/json': { schema: ArticleDTOSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'messageId that can use to get the status of import later on.!',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const deleteApiArticleRoute = createRoute({
  method: 'delete',
  path: '/api/Article',
  tags: ['Article'],
  summary: 'Delete article from the system\n            ',
  operationId: 'Article_Delete',
  request: {
    query: z.object({
      ArticleId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'indentity number(primary key) for article object',
            in: 'query',
            name: 'ArticleId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'operation was success(true) or fail(false) ',
      content: { 'application/json': { schema: DefaultResponseDTOOfIntegerSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfIntegerSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const putApiArticleArticleGymDetailsRoute = createRoute({
  method: 'put',
  path: '/api/Article/ArticleGymDetails',
  tags: ['Article'],
  summary: 'Add article details that associate with a Gym\n            ',
  operationId: 'Article_UpdateArticleGymDetails',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(GymArticleDetailsDTOSchema) } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'messageId that can use to get the status of import later on.!',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiArticleGetAddonsRoute = createRoute({
  method: 'get',
  path: '/api/Article/GetAddons',
  tags: ['Article'],
  operationId: 'Article_GetAddons',
  request: {
    query: z.object({
      searchText: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Search text - will be search by the name',
            in: 'query',
            name: 'searchText',
            schema: { nullable: true, type: 'string' },
            'x-position': 1,
            required: false,
          },
        }),
      gymIds: z
        .string()
        .nullable()
        .default('-1')
        .exactOptional()
        .openapi({
          param: {
            description: 'Comma separated gymIds deafult "-1" for all gyms',
            in: 'query',
            name: 'gymIds',
            schema: { default: '-1', nullable: true, type: 'string' },
            'x-position': 2,
            required: false,
          },
        }),
      type: z
        .string()
        .nullable()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'type',
            schema: { default: 'all', nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            'x-position': 4,
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'offset',
            schema: { default: 0, format: 'int32', type: 'integer' },
            'x-position': 5,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfArticleSearchDTOSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfArticleSearchDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiArticleGymArticleArticleIdGymIdRoute = createRoute({
  method: 'get',
  path: '/api/Article/GymArticle/{articleId}/{gymId}',
  tags: ['Article'],
  summary: 'Get Gym specific properties for article\n            ',
  operationId: 'Article_GymArticleDetails',
  request: {
    params: z.object({
      articleId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'indentity number(primary key) for article object',
            in: 'path',
            name: 'articleId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
          },
        }),
      gymId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'indentity number(primary key) for gym object',
            in: 'path',
            name: 'gymId',
            required: true,
            schema: { format: 'int32', type: 'integer' },
            'x-position': 2,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API Response with Article entity',
      content: { 'application/json': { schema: GymArticleDetailsDTOSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfArticleSearchDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const postApiArticleMeasureUnitRoute = createRoute({
  method: 'post',
  path: '/api/Article/MeasureUnit',
  tags: ['Article'],
  summary: 'Add measure unit',
  operationId: 'Article_AddMeasureUnit',
  request: {
    body: {
      description: 'list of measureUnit',
      content: { 'application/json': { schema: z.array(MeasureUnitDTOSchema) } },
      required: true,
    },
  },
  responses: {
    202: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiArticleMeasureUnitsRoute = createRoute({
  method: 'get',
  path: '/api/Article/MeasureUnits',
  tags: ['Article'],
  summary: 'Get mesure units',
  operationId: 'Article_GetMeasureUnits',
  request: {
    query: z.object({
      type: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'type of the measure unit (all, item, service)',
            in: 'query',
            name: 'type',
            schema: { nullable: true, type: 'string' },
            'x-position': 1,
            required: false,
          },
        }),
    }),
  },
  responses: {
    202: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiArticleRevenueAccountsRoute = createRoute({
  method: 'get',
  path: '/api/Article/RevenueAccounts',
  tags: ['Article'],
  summary: 'Get Revenue Accounts ',
  operationId: 'Article_GetRevenueAccounts',
  responses: {
    202: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiArticleSearchRoute = createRoute({
  method: 'get',
  path: '/api/Article/Search',
  tags: ['Article'],
  summary: 'Search articles\nIt will only return basic information of article\n            ',
  operationId: 'Article_Search',
  request: {
    query: z.object({
      searchText: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'part of article name',
            in: 'query',
            name: 'searchText',
            schema: { nullable: true, type: 'string' },
            'x-position': 1,
            required: false,
          },
        }),
      gymId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: '-1 for all gyms ',
            in: 'query',
            name: 'gymId',
            schema: { default: -1, format: 'int32', type: 'integer' },
            'x-position': 2,
            required: false,
          },
        }),
      type: z
        .string()
        .nullable()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: "filter article type. default is 'all'",
            in: 'query',
            name: 'type',
            schema: { default: 'all', nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
      orderBy: z
        .string()
        .nullable()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description: 'order by column.!-- invalid column will give internal server error',
            in: 'query',
            name: 'orderBy',
            schema: { default: '1', nullable: true, type: 'string' },
            'x-position': 4,
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'number of recode in result and default is 100. use negative numbers to order by desc',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            'x-position': 5,
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of recodes to skip',
            in: 'query',
            name: 'offset',
            schema: { default: 0, format: 'int32', type: 'integer' },
            'x-position': 6,
            required: false,
          },
        }),
      activeStatus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Active Status 1 : Active, 2: Inactive, 3: All, Default : 1',
            in: 'query',
            name: 'activeStatus',
            schema: { default: 1, format: 'int32', type: 'integer' },
            'x-position': 7,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API Response with set of a Article entities',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfArticleSearchDTOSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfArticleSearchDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const putApiArticleUpdateStatusRoute = createRoute({
  method: 'put',
  path: '/api/Article/UpdateStatus',
  tags: ['Article'],
  summary: 'Deactivate existing article ',
  operationId: 'Article_UpdateStatus',
  request: {
    query: z.object({
      ArticleId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'ArticleId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: '1 : activate , 2 deactivate',
            in: 'query',
            name: 'status',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 2,
            required: false,
          },
        }),
      userName: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Updating user',
            in: 'query',
            name: 'userName',
            schema: { nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfIntegerSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfIntegerSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const getApiArticleArticleIDRoute = createRoute({
  method: 'get',
  path: '/api/Article/{articleID}',
  tags: ['Article'],
  summary:
    'Get article details\nThis will return all properties related to article entity\n            ',
  operationId: 'Article_get',
  request: {
    params: z.object({
      articleID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'indentity number (primary key) for article object',
            in: 'path',
            name: 'articleID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API Response with Article entity',
      content: { 'application/json': { schema: DefaultResponseDTOOfArticleDTOSchema } },
    },
    404: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const postApiAuthLoginRoute = createRoute({
  method: 'post',
  path: '/api/Auth/login',
  tags: ['Auth'],
  summary: 'Authenticate and provide token for autherizations.\n            ',
  operationId: 'Auth_Login',
  request: {
    body: {
      description: 'Login Credentials',
      content: { 'application/json': { schema: LoginDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Authorizized with a new token or unauthorized request.',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
  },
})

export const getApiGymGymIDRoute = createRoute({
  method: 'get',
  path: '/api/Gym/{gymID}',
  tags: ['Gym'],
  summary: 'Get gym details\nThis will return all properties related to gym entity\n            ',
  operationId: 'Gym_get',
  request: {
    params: z.object({
      gymID: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .openapi({
          param: {
            description: 'indentity number (primary key) for gym object',
            in: 'path',
            name: 'gymID',
            required: true,
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'API Response with Gym entity',
      content: { 'application/json': { schema: DefaultResponseDTOOfGymDTOSchema } },
    },
    404: { description: '', content: { 'application/json': { schema: ApiResponseSchema } } },
  },
})

export const getApiMembershipRoute = createRoute({
  method: 'get',
  path: '/api/Membership',
  tags: ['Membership'],
  summary:
    'Get all of the members details\nThis will return all properties related to member entity\n            ',
  operationId: 'Membership_Get',
  responses: {
    200: {
      description: 'API Response with all Members entity as a list.',
      content: { 'application/json': { schema: z.array(MemberDTOSchema) } },
    },
    404: { description: '', content: { 'application/json': { schema: ProblemDetailsSchema } } },
  },
  security: [{ bearer: [] }],
})

export const postApiMembershipRoute = createRoute({
  method: 'post',
  path: '/api/Membership',
  tags: ['Membership'],
  summary: 'Add new Member\n            ',
  operationId: 'Membership_Post',
  request: {
    body: {
      description: 'member object',
      content: { 'application/json': { schema: MemberDTOSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'newly created member entity',
      content: { 'application/json': { schema: z.boolean() } },
    },
    404: { description: '', content: { 'application/json': { schema: ProblemDetailsSchema } } },
  },
})

export const getApiPackageRoute = createRoute({
  method: 'get',
  path: '/api/Package',
  tags: ['Package'],
  summary: 'Get package details by packageId\n            ',
  operationId: 'Package_Get',
  request: {
    query: z.object({
      packageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'primary key of package entity',
            in: 'query',
            name: 'packageId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'all the fields that related to the package',
      content: { 'application/json': { schema: DefaultResponseDTOOfPackageDTOSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfPackageDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const putApiPackageRoute = createRoute({
  method: 'put',
  path: '/api/Package',
  tags: ['Package'],
  summary: 'Update existing package by its ID\n            ',
  operationId: 'Package_Put',
  request: {
    body: {
      description: 'package object',
      content: { 'application/json': { schema: PackageDTOSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'messageId that can use to get the status of import later on.!',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const postApiPackageRoute = createRoute({
  method: 'post',
  path: '/api/Package',
  tags: ['Package'],
  summary: 'Insert new package into the system\n            ',
  operationId: 'Package_Post',
  request: {
    body: {
      description: 'package object',
      content: { 'application/json': { schema: PackageDTOSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'messageId that can use to get the status of import later on.!',
      content: { 'application/json': { schema: DefaultResponseDTOOfStatusDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const deleteApiPackageRoute = createRoute({
  method: 'delete',
  path: '/api/Package',
  tags: ['Package'],
  summary: 'Delete existing package\n            ',
  operationId: 'Package_Delete',
  request: {
    query: z.object({
      PackageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'primary key of package entity',
            in: 'query',
            name: 'PackageId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'status 1  : success, status 404 : package not found, status -2: package already in use ',
      content: { 'application/json': { schema: DefaultResponseDTOOfBooleanSchema } },
    },
    400: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStringSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStringSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const getApiPackageSearchRoute = createRoute({
  method: 'get',
  path: '/api/Package/Search',
  tags: ['Package'],
  summary: 'Search packages\n            ',
  operationId: 'Package_Search',
  request: {
    query: z.object({
      searchText: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'part of package name',
            in: 'query',
            name: 'searchText',
            schema: { nullable: true, type: 'string' },
            'x-position': 1,
            required: false,
          },
        }),
      gymId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'primary key of TL gym entity',
            in: 'query',
            name: 'gymId',
            schema: { default: -1, format: 'int32', type: 'integer' },
            'x-position': 2,
            required: false,
          },
        }),
      type: z
        .string()
        .nullable()
        .default('all')
        .exactOptional()
        .openapi({
          param: {
            description: "filter package type.!-- default is 'all'",
            in: 'query',
            name: 'type',
            schema: { default: 'all', nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
      orderBy: z
        .string()
        .nullable()
        .default('1')
        .exactOptional()
        .openapi({
          param: {
            description: 'order by column.!-- invalid column will give internal server error',
            in: 'query',
            name: 'orderBy',
            schema: { default: '1', nullable: true, type: 'string' },
            'x-position': 4,
            required: false,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(100)
        .exactOptional()
        .openapi({
          param: {
            description:
              'number of recode in result and default is 100. use negative numbers to order by desc',
            in: 'query',
            name: 'limit',
            schema: { default: 100, format: 'int32', type: 'integer' },
            'x-position': 5,
            required: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'number of recodes to skip',
            in: 'query',
            name: 'offset',
            schema: { default: 0, format: 'int32', type: 'integer' },
            'x-position': 6,
            required: false,
          },
        }),
      activeStatus: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'active status active : 1, inactive : 2, all 3, deafult : 1',
            in: 'query',
            name: 'activeStatus',
            schema: { default: 1, format: 'int32', type: 'integer' },
            'x-position': 7,
            required: false,
          },
        }),
      categoryId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(-1)
        .exactOptional()
        .openapi({
          param: {
            description: 'Packge Category Id',
            in: 'query',
            name: 'categoryId',
            schema: { default: -1, format: 'int32', type: 'integer' },
            'x-position': 8,
            required: false,
          },
        }),
      startpPrice: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(0)
        .exactOptional()
        .openapi({
          param: {
            description: 'Start price of the price Range',
            in: 'query',
            name: 'startpPrice',
            schema: { default: 0, format: 'decimal', type: 'number' },
            'x-position': 9,
            required: false,
          },
        }),
      endPrice: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.number(),
        )
        .default(9999999)
        .exactOptional()
        .openapi({
          param: {
            description: 'End Price of the price Range',
            in: 'query',
            name: 'endPrice',
            schema: { default: 9999999, format: 'decimal', type: 'number' },
            'x-position': 10,
            required: false,
          },
        }),
      requestSource: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: '1 : MRM, 2 : Mobile ',
            in: 'query',
            name: 'requestSource',
            schema: { default: 1, format: 'int32', type: 'integer' },
            'x-position': 11,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'basic information of package entity',
      content: {
        'application/json': { schema: z.array(DefaultResponseDTOOfPackageSearchDTOSchema) },
      },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfListOfPackageSearchDTOSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const putApiPackageUpdateStatusRoute = createRoute({
  method: 'put',
  path: '/api/Package/UpdateStatus',
  tags: ['Package'],
  summary: 'Status update of existing package ',
  operationId: 'Package_UpdateStatus',
  request: {
    query: z.object({
      packageId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'package Id',
            in: 'query',
            name: 'packageId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
      status: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .default(1)
        .exactOptional()
        .openapi({
          param: {
            description: 'status : 1 activate, 2 : deactivate',
            in: 'query',
            name: 'status',
            schema: { default: 1, format: 'int32', type: 'integer' },
            'x-position': 2,
            required: false,
          },
        }),
      userName: z
        .string()
        .nullable()
        .default('system')
        .exactOptional()
        .openapi({
          param: {
            description: 'Status updated User',
            in: 'query',
            name: 'userName',
            schema: { default: 'system', nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description:
        'status 1 : success, status 404 : package not found, status -2: package already in use ',
      content: { 'application/json': { schema: DefaultResponseDTOOfBooleanSchema } },
    },
    400: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStringSchema } },
    },
    404: {
      description: '',
      content: { 'application/json': { schema: DefaultResponseDTOOfStringSchema } },
    },
    500: { description: '', content: { 'application/json': { schema: ApiExceptionSchema } } },
  },
})

export const getApiStatusRoute = createRoute({
  method: 'get',
  path: '/api/Status',
  tags: ['Status'],
  summary: 'Get the current status of message',
  operationId: 'Status_Get',
  request: {
    query: z.object({
      messageId: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'respose of POST request',
            in: 'query',
            name: 'messageId',
            schema: { nullable: true, type: 'string' },
            'x-position': 1,
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'same response result will retrun with different status and messageText',
      content: { 'application/json': { schema: MessageStatusSchema } },
    },
    404: { description: '', content: { 'application/json': { schema: ProblemDetailsSchema } } },
  },
})

export const getApiTestRoute = createRoute({
  method: 'get',
  path: '/api/Test',
  tags: ['Test'],
  summary: 'Get the all Test objects.\n            ',
  operationId: 'Test_get',
  responses: {
    200: {
      description: 'API Response with test objects as a list.',
      content: { 'application/json': { schema: TestDTOSchema } },
    },
  },
})

export const getApiUserRoute = createRoute({
  method: 'get',
  path: '/api/User',
  tags: ['User'],
  summary:
    'Get all Users detail\nThis will return all properties related to User entity\n            ',
  operationId: 'User_Get',
  responses: {
    200: {
      description: 'API Response with User entity',
      content: { 'application/json': { schema: UserDTOSchema } },
    },
  },
})

export const postApiUserRegisterUserRoute = createRoute({
  method: 'post',
  path: '/api/User/registerUser',
  tags: ['User'],
  summary: 'Register a new User\n            ',
  operationId: 'User_registerUser',
  request: {
    query: z.object({
      UserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indentity number(primary key) for user object. Generated in DB table when inserting a record.\n            ',
            in: 'query',
            name: 'UserId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
      AccountNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Account number of the user.It can be any stakeholder of the application.even can be a gym.\n            ',
            in: 'query',
            name: 'AccountNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 2,
            required: false,
          },
        }),
      GymNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'If this user is a gym, then the gym number.\n            ',
            in: 'query',
            name: 'GymNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
      ExternalEntityNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity number that make a relationship with BOX API DB.\n            ',
            in: 'query',
            name: 'ExternalEntityNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 4,
            required: false,
          },
        }),
      Name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the user.\n            ',
            in: 'query',
            name: 'Name',
            schema: { nullable: true, type: 'string' },
            'x-position': 5,
            required: false,
          },
        }),
      Number: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Unique number maintain by application to idenify user.\n            ',
            in: 'query',
            name: 'Number',
            schema: { nullable: true, type: 'string' },
            'x-position': 6,
            required: false,
          },
        }),
      IntroduceBy: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "If Someone introduced this user to the system, then that user's UserId.\n            ",
            in: 'query',
            name: 'IntroduceBy',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 7,
            required: false,
          },
        }),
      Guardian: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Gaurdian of the this user if he/she is under 18 years old.\n            ',
            in: 'query',
            name: 'Guardian',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 8,
            required: false,
          },
        }),
      TypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the user.\n            ',
            in: 'query',
            name: 'TypeId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 9,
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'API Response' }, 404: { description: '' } },
})

export const putApiUserUpdateuserRoute = createRoute({
  method: 'put',
  path: '/api/User/updateuser',
  tags: ['User'],
  summary: 'Update an exsisting User\n            ',
  operationId: 'User_updateUser',
  request: {
    query: z.object({
      UserId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Indentity number(primary key) for user object. Generated in DB table when inserting a record.\n            ',
            in: 'query',
            name: 'UserId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 1,
            required: false,
          },
        }),
      AccountNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Account number of the user.It can be any stakeholder of the application.even can be a gym.\n            ',
            in: 'query',
            name: 'AccountNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 2,
            required: false,
          },
        }),
      GymNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'If this user is a gym, then the gym number.\n            ',
            in: 'query',
            name: 'GymNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 3,
            required: false,
          },
        }),
      ExternalEntityNumber: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Entity number that make a relationship with BOX API DB.\n            ',
            in: 'query',
            name: 'ExternalEntityNumber',
            schema: { nullable: true, type: 'string' },
            'x-position': 4,
            required: false,
          },
        }),
      Name: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Name of the user.\n            ',
            in: 'query',
            name: 'Name',
            schema: { nullable: true, type: 'string' },
            'x-position': 5,
            required: false,
          },
        }),
      Number: z
        .string()
        .nullable()
        .exactOptional()
        .openapi({
          param: {
            description: 'Unique number maintain by application to idenify user.\n            ',
            in: 'query',
            name: 'Number',
            schema: { nullable: true, type: 'string' },
            'x-position': 6,
            required: false,
          },
        }),
      IntroduceBy: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              "If Someone introduced this user to the system, then that user's UserId.\n            ",
            in: 'query',
            name: 'IntroduceBy',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 7,
            required: false,
          },
        }),
      Guardian: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Gaurdian of the this user if he/she is under 18 years old.\n            ',
            in: 'query',
            name: 'Guardian',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 8,
            required: false,
          },
        }),
      TypeId: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int32(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'Type of the user.\n            ',
            in: 'query',
            name: 'TypeId',
            schema: { format: 'int32', type: 'integer' },
            'x-position': 9,
            required: false,
          },
        }),
    }),
  },
  responses: { 200: { description: 'API Response true or false' }, 404: { description: '' } },
})
