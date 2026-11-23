type AttachmentRequest = {
  Domains: {
    DomainValues?: string | undefined
    FieldName?: string | undefined
    MaxCaracters?: string | undefined
  }[]
  IsActive: boolean
  IsRequired: boolean
  Name: string
}
type AttachmentResponse = {
  Domains: {
    DomainValues?: string | undefined
    FieldName?: string | undefined
    MaxCaracters?: string | undefined
  }[]
  Id: number
  IsActive: boolean
  IsRequired: boolean
  Name: string
}
type BrandCreateUpdate = {
  Active?: boolean | undefined
  AdWordsRemarketingCode?: string | undefined
  Id: number
  Keywords?: string | undefined
  LinkId?: (string | null) | undefined
  LomadeeCampaignCode?: string | undefined
  MenuHome?: boolean | undefined
  Name: string
  Score?: (number | null) | undefined
  SiteTitle?: string | undefined
  Text?: string | undefined
}
type CreateCategoryRequest = {
  ActiveStoreFrontLink: boolean
  AdWordsRemarketingCode: string | null
  Description: string
  FatherCategoryId: number | null
  GlobalCategoryId: number
  Id?: number | undefined
  IsActive: boolean
  Keywords: string
  LomadeeCampaignCode: string | null
  Name: string
  Score: number | null
  ShowBrandFilter: boolean
  ShowInStoreFront: boolean
  StockKeepingUnitSelectionMode: string
  Title: string
}
type Category = {
  ActiveStoreFrontLink: boolean
  AdWordsRemarketingCode: string
  Description: string
  FatherCategoryId: number | null
  GlobalCategoryId: number
  HasChildren: boolean
  Id: number
  IsActive: boolean
  Keywords: string
  LinkId: string | null
  LomadeeCampaignCode: string
  Name: string
  Score: number | null
  ShowBrandFilter: boolean
  ShowInStoreFront: boolean
  StockKeepingUnitSelectionMode: string
  Title: string
}
type SkuComplement = {
  ComplementTypeId?: number | undefined
  Id?: number | undefined
  ParentSkuId?: number | undefined
  SkuId?: number | undefined
}[]
type SKUService = {
  Id?: number | undefined
  IsActive?: boolean | undefined
  Name?: string | undefined
  SkuId?: number | undefined
  SkuServiceTypeId?: number | undefined
  SkuServiceValueId?: number | undefined
  Text?: string | undefined
}
type SKUServiceTypeRequest = {
  IsActive: boolean
  IsGiftCard: boolean
  IsRequired: boolean
  Name: string
  ShowOnAttachmentFront: boolean
  ShowOnCartFront: boolean
  ShowOnFileUpload: boolean
  ShowOnProductFront: boolean
}
type SKUServiceTypeResponse = {
  Id?: number | undefined
  IsActive?: boolean | undefined
  IsGiftCard?: boolean | undefined
  IsRequired?: boolean | undefined
  Name?: string | undefined
  ShowOnAttachmentFront?: boolean | undefined
  ShowOnCartFront?: boolean | undefined
  ShowOnFileUpload?: boolean | undefined
  ShowOnProductFront?: boolean | undefined
}
type SKUServiceValueRequest = {
  Cost: number
  Name: string
  SkuServiceTypeId: number
  Value: number
}
type SKUServiceValueResponse = {
  Cost: number
  Id?: number | undefined
  Name: string
  SkuServiceTypeId: number
  Value: number
}
type SpecificationGroupInsertRequest = { CategoryId: number; Name: string }
type SKUFileURL = {
  IsMain?: boolean | undefined
  Label?: string | undefined
  Name: string
  Text?: (string | null) | undefined
  Url: string
}
type SKUFile = File
type SKUSpecificationResponse = {
  FieldId?: number | undefined
  FieldValueId?: number | undefined
  Id?: number | undefined
  SkuId?: number | undefined
  Text?: string | undefined
}
type SkuKit = {
  Id?: number | undefined
  Quantity?: number | undefined
  StockKeepingUnitId?: number | undefined
  StockKeepingUnitParent?: number | undefined
  UnitPrice?: number | undefined
}
type SupplierRequest = {
  CellPhone: string
  Cnpj: string
  CorporateName: string
  CorportePhone: string
  Email: string
  IsActive: boolean
  Name: string
  Phone: string
  StateInscription: string
}
type SupplierResponse = {
  CellPhone?: string | undefined
  Cnpj?: string | undefined
  CorporateName?: string | undefined
  CorportePhone?: string | undefined
  Email?: string | undefined
  Id?: number | undefined
  IsActive?: boolean | undefined
  Name?: string | undefined
  Phone?: string | undefined
  StateInscription?: string | undefined
}
type GetCategoryTreeChild = {
  MetaTagDescription: string
  Title: string
  children: { [x: string]: unknown }[]
  hasChildren: boolean
  id: number
  name: string
  url: string
}
type GetCategoryTree = {
  MetaTagDescription: string
  Title: string
  children: GetCategoryTreeChild[]
  hasChildren: boolean
  id: number
  name: string
  url: string
}
type CategorySpecification = {
  CategoryId?: number | undefined
  FieldId?: number | undefined
  IsActive?: boolean | undefined
  IsStockKeepingUnit?: boolean | undefined
  Name?: string | undefined
}[]
type GetSpecFieldValue = {
  FieldValueId: number
  IsActive: boolean
  Position: number
  Value: string
}
type SpecificationsGroup = {
  CategoryId: number | null
  Id: number
  Name: string
  Position: number | null
}
type BrandGet = {
  id: number
  imageUrl: string | null
  isActive: boolean
  metaTagDescription: string
  name: string
  title: string
}
type GetorUpdateProductSpecification = {
  Id?: number | undefined
  Name?: string | undefined
  Value: string[]
}
type CreateSellerRequest = {
  ArchiveId: number
  CNPJ: string
  CSCIdentification: string
  CatalogSystemEndpoint: string
  CategoryCommissionPercentage?: string | undefined
  DeliveryPolicy: string
  Description: string
  Email: string
  ExchangeReturnPolicy: string
  FreightCommissionPercentage: number
  FulfillmentEndpoint: string
  FulfillmentSellerId: number
  IsActive: boolean
  IsBetterScope: boolean
  MerchantName?: string | undefined
  Name: string
  Password: string
  ProductCommissionPercentage: number
  SecutityPrivacyPolicy: string
  SellerId: string
  SellerType: number
  TrustPolicy?: string | undefined
  UrlLogo: string
  UseHybridPaymentOptions: boolean
  UserName: string
}
type UpdateSellerRequest = {
  ArchiveId: number
  CNPJ: string
  CSCIdentification: string
  CatalogSystemEndpoint: string
  CategoryCommissionPercentage?: string | undefined
  DeliveryPolicy: string
  Description: string
  Email: string
  ExchangeReturnPolicy: string
  FreightCommissionPercentage: number
  FulfillmentEndpoint: string
  FulfillmentSellerId: number
  IsActive: boolean
  IsBetterScope: boolean
  MerchantName?: string | undefined
  Name: string
  Password: string
  ProductCommissionPercentage: number
  SecutityPrivacyPolicy: string
  SellerId: string
  SellerType: number
  TrustPolicy?: string | undefined
  UrlLogo: string
  UseHybridPaymentOptions: boolean
  UserName: string
}
type SkulistbyProductId = {
  ActivateIfPossible?: boolean | undefined
  CommercialConditionId?: number | undefined
  CubicWeight?: number | undefined
  DateUpdated?: string | undefined
  EstimatedDateArrival?: (string | null) | undefined
  FlagKitItensSellApart?: boolean | undefined
  Height?: number | undefined
  Id?: number | undefined
  InternalNote?: (string | null) | undefined
  IsActive?: boolean | undefined
  IsDynamicKit?: (string | null) | undefined
  IsGiftCardRecharge?: (boolean | null) | undefined
  IsInventoried?: (boolean | null) | undefined
  IsKit?: boolean | undefined
  IsPersisted?: boolean | undefined
  IsRemoved?: boolean | undefined
  IsTransported?: (boolean | null) | undefined
  Length?: number | undefined
  ManufacturerCode?: string | undefined
  MeasurementUnit?: string | undefined
  ModalId?: number | undefined
  ModalType?: (string | null) | undefined
  Name?: string | undefined
  Position?: number | undefined
  ProductId?: number | undefined
  RealHeight?: (number | null) | undefined
  RealLength?: (number | null) | undefined
  RealWeightKg?: (number | null) | undefined
  RealWidth?: (number | null) | undefined
  RefId?: string | undefined
  ReferenceStockKeepingUnitId?: (string | null) | undefined
  RewardValue?: (number | null) | undefined
  UnitMultiplier?: number | undefined
  WeightKg?: (number | null) | undefined
  Width?: number | undefined
  isKitOptimized?: boolean | undefined
}
type AlternateIds = { Ean?: string | undefined; RefId?: string | undefined }
type Field = { DomainValues: string | null; FieldName: string; MaxCaracters: string }
type Attachment = {
  Fields: Field[]
  Id: number
  IsActive: boolean
  IsRequired: boolean
  Keys: string[]
  Name: string
}
type Dimension = {
  cubicweight: number
  height: number
  length: number
  weight: number
  width: number
}
type Image = { FileId: number; ImageName: string | null; ImageUrl: string }
type ProductSpecification = {
  FieldId: number
  FieldName: string
  FieldValueIds: number[]
  FieldValues: string[]
}
type RealDimension = {
  realCubicWeight: number
  realHeight: number
  realLength: number
  realWeight: number
  realWidth: number
}
type SkuSeller = {
  FreightCommissionPercentage: number
  IsActive: boolean
  ProductCommissionPercentage: number
  SellerId: string
  SellerStockKeepingUnitId: string
  StockKeepingUnitId: number
}
type SkuSpecification = {
  FieldId: number
  FieldName: string
  FieldValueIds: number[]
  FieldValues: string[]
}
type GetSKUAltID = {
  AlternateIdValues: string[]
  AlternateIds: AlternateIds
  Attachments: Attachment[]
  BrandId: string
  BrandName: string
  CSCIdentification: string | null
  Categories: string[]
  CategoriesFullPath?: string[] | undefined
  Collections: string[]
  CommercialConditionId: number
  ComplementName?: string | undefined
  DetailUrl: string
  Dimension: Dimension
  EstimatedDateArrival: string | null
  Id: number
  ImageUrl: string
  Images: Image[]
  InformationSource: string | null
  IsActive: boolean
  IsDirectCategoryActive?: boolean | undefined
  IsGiftCardRecharge: boolean
  IsInventoried: boolean
  IsKit: boolean
  IsProductActive?: boolean | undefined
  IsTransported: boolean
  KeyWords?: (string | null) | undefined
  KitItems: string[]
  ManufacturerCode: string
  MeasurementUnit: string
  ModalType: string | null
  NameComplete: string
  PositionsInClusters?: { [x: string]: number } | undefined
  ProductCategories: { [x: string]: string }
  ProductCategoryIds: string
  ProductClusterHighlights?: { [x: string]: string } | undefined
  ProductClusterNames?: { [x: string]: string } | undefined
  ProductClustersIds: string
  ProductDescription: string
  ProductFinalScore?: number | undefined
  ProductGlobalCategoryId: number | null
  ProductId: number
  ProductIsVisible?: boolean | undefined
  ProductName: string
  ProductRefId?: string | undefined
  ProductSpecifications: ProductSpecification[]
  RealDimension: RealDimension
  ReleaseDate?: (string | null) | undefined
  RewardValue: number
  SalesChannels: number[]
  Services: string[]
  ShowIfNotAvailable?: boolean | undefined
  SkuName: string
  SkuSellers: SkuSeller[]
  SkuSpecifications: SkuSpecification[]
  TaxCode?: string | undefined
  UnitMultiplier: number
}
type GetSKUandContext = {
  AlternateIdValues: string[]
  AlternateIds: AlternateIds
  Attachments: Attachment[]
  BrandId: string
  BrandName: string
  CSCIdentification: string | null
  Categories: string[]
  Collections: string[]
  CommercialConditionId: number
  ComplementName?: string | undefined
  DetailUrl: string
  Dimension: Dimension
  EstimatedDateArrival: string | null
  Id: number
  ImageUrl: string
  Images: Image[]
  InformationSource: string | null
  IsActive: boolean
  IsGiftCardRecharge: boolean
  IsInventoried: boolean | null
  IsKit: boolean
  IsProductActive?: boolean | undefined
  IsTransported: boolean | null
  KeyWords?: (string | null) | undefined
  KitItems: string[]
  ManufacturerCode: string
  MeasurementUnit: string
  ModalType: string | null
  NameComplete: string
  ProductCategories: { [x: string]: string }
  ProductCategoryIds: string
  ProductClustersIds: string
  ProductDescription: string
  ProductFinalScore?: number | undefined
  ProductGlobalCategoryId: number | null
  ProductId: number
  ProductIsVisible?: boolean | undefined
  ProductName: string
  ProductRefId?: string | undefined
  ProductSpecifications: ProductSpecification[]
  RealDimension: RealDimension
  ReleaseDate?: (string | null) | undefined
  RewardValue: number
  SalesChannels: number[]
  Services: string[]
  ShowIfNotAvailable?: boolean | undefined
  SkuName: string
  SkuSellers: SkuSeller[]
  SkuSpecifications: SkuSpecification[]
  TaxCode?: string | undefined
  UnitMultiplier: number
}
type SpecificationsInsertFieldRequest = {
  CategoryId: number | null
  DefaultValue: string | null
  Description: string | null
  FieldGroupId: number
  FieldGroupName: string
  FieldId: number | null
  FieldTypeId: number
  FieldValueId: number | null
  IsActive: boolean
  IsFilter: boolean
  IsOnProductDetails: boolean
  IsRequired: boolean
  IsSideMenuLinkActive: boolean
  IsStockKeepingUnit: boolean
  IsTopMenuLinkActive: boolean
  IsWizard: boolean
  Name: string
  Position: number
}
type SpecificationsInsertFieldUpdateRequest = {
  CategoryId: number | null
  DefaultValue: string | null
  Description: string | null
  FieldGroupId: number
  FieldGroupName: string
  FieldId: number | null
  FieldTypeId: number
  FieldValueId?: (number | null) | undefined
  IsActive: boolean
  IsFilter: boolean
  IsOnProductDetails: boolean
  IsRequired: boolean
  IsSideMenuLinkActive: boolean
  IsStockKeepingUnit: boolean
  IsTopMenuLinkActive: boolean
  IsWizard: boolean
  Name: string
  Position: number
}
type SpecificationsInsertFieldValueRequest = {
  FieldId: number
  IsActive: boolean
  Name: string
  Position: number
  Text: string
}
type SpecificationsUpdateFieldValueRequest = {
  FieldId: number | null
  IsActive: boolean
  Name: string
  Position: number
  Text: string | null
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/addon/pvt/giftlist/get/:listId': {
      $get: {
        input: { param: { listId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          IsPublic?: boolean | undefined
          address?: (string | null) | undefined
          dateCreated?: string | undefined
          eventCity?: string | undefined
          eventDate?: string | undefined
          eventLocation?: string | undefined
          eventState?: string | undefined
          fileId?: (number | null) | undefined
          fileUrl?: (string | null) | undefined
          giftCardId?: number | undefined
          giftCardRechargeSkuId?: (number | null) | undefined
          giftListId?: number | undefined
          giftListMembers?:
            | {
                clientId?: (string | null) | undefined
                giftListId?: number | undefined
                giftListMemberId?: number | undefined
                isActive?: boolean | undefined
                isAdmin?: boolean | undefined
                name?: string | undefined
                surname?: string | undefined
                text1?: (string | null) | undefined
                text2?: (string | null) | undefined
                title?: (string | null) | undefined
                userId?: string | undefined
              }[]
            | undefined
          giftListSkuIds?: string[] | undefined
          giftListTypeId?: number | undefined
          giftListTypeName?: string | undefined
          isActive?: boolean | undefined
          isAddressOk?: boolean | undefined
          memberNames?: string | undefined
          message?: string | undefined
          name?: string | undefined
          profileSystemUserAddressName?: string | undefined
          profileSystemUserId?: string | undefined
          shipsToOwner?: boolean | undefined
          telemarketingId?: (number | null) | undefined
          telemarketingObservation?: string | undefined
          urlFolder?: string | undefined
          userId?: string | undefined
          version?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/addon/pvt/review/GetProductRate/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/attachment': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: AttachmentRequest }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/attachment/:attachmentid': {
      $delete: {
        input: { param: { attachmentid: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { attachmentid: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { attachmentid: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: AttachmentRequest }
        output: AttachmentResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/attachments': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          Data?: AttachmentResponse[] | undefined
          Page?: number | undefined
          Size?: number | undefined
          TotalPage?: number | undefined
          TotalRows?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/brand': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: BrandCreateUpdate }
        output: BrandCreateUpdate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/brand/:brandId': {
      $delete: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: BrandCreateUpdate
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: BrandCreateUpdate }
        output: BrandCreateUpdate
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/category': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: CreateCategoryRequest
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/category/:categoryId': {
      $get: {
        input: { param: { categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            ActiveStoreFrontLink: boolean
            AdWordsRemarketingCode: string
            Description: string
            FatherCategoryId: number | null
            GlobalCategoryId: number
            IsActive: boolean
            Keywords: string
            LomadeeCampaignCode: string
            Name: string
            Score: number
            ShowBrandFilter: boolean
            ShowInStoreFront: boolean
            StockKeepingUnitSelectionMode: string
            Title: string
          }
        }
        output: Category
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            DateFrom: string
            DateTo: string
            Highlight: boolean
            Name: string
            Searchable: boolean
          }
        }
        output: {
          DateFrom?: string | undefined
          DateTo?: string | undefined
          Description?: (string | null) | undefined
          Highlight?: boolean | undefined
          Id?: number | undefined
          Name?: string | undefined
          Searchable?: boolean | undefined
          TotalProducts?: number | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            DateFrom: string
            DateTo: string
            Description: string
            Highlight: boolean
            Name: string
            Searchable: boolean
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/inactive': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/stockkeepingunit/importfileexample': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId': {
      $delete: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          DateFrom?: string | undefined
          DateTo?: string | undefined
          Description?: (string | null) | undefined
          Highlight?: boolean | undefined
          Id?: number | undefined
          Name?: string | undefined
          Searchable?: boolean | undefined
          TotalProducts?: number | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            DateFrom: string
            DateTo: string
            Highlight: boolean
            Name: string
            Searchable: boolean
          }
        }
        output: {
          DateFrom?: string | undefined
          DateTo?: string | undefined
          Description?: (string | null) | undefined
          Highlight?: boolean | undefined
          Id?: number | undefined
          Name?: string | undefined
          Searchable?: boolean | undefined
          TotalProducts?: number | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId/position': {
      $post: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { position: number; skuId: number; subCollectionId: number } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId/products': {
      $get: {
        input: { param: { collectionId: number } } & {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            Filter?: string | undefined
            Active?: boolean | undefined
            Visible?: boolean | undefined
            CategoryId?: number | undefined
            BrandId?: number | undefined
            SupplierId?: number | undefined
            SalesChannelId?: number | undefined
            ReleaseFrom?: string | undefined
            ReleaseTo?: string | undefined
            SpecificationProduct?: string | undefined
            SpecificationFieldId?: number | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importexclude': {
      $post: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { form: { file?: { [x: string]: unknown } | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId/stockkeepingunit/importinsert': {
      $post: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { form: { file?: { [x: string]: unknown } | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/collection/:collectionId/subcollection': {
      $get: {
        input: { param: { collectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          CollectionId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          PreSale?: boolean | undefined
          Release?: boolean | undefined
          Type?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            AdWordsRemarketingCode?: string | undefined
            BrandId?: number | undefined
            BrandName?: string | undefined
            CategoryId?: number | undefined
            CategoryPath?: string | undefined
            Description?: string | undefined
            DescriptionShort?: string | undefined
            Id?: number | undefined
            IsActive?: boolean | undefined
            IsVisible?: boolean | undefined
            KeyWords?: string | undefined
            LinkId?: string | undefined
            LomadeeCampaignCode?: string | undefined
            MetaTagDescription?: string | undefined
            Name: string
            RefId?: string | undefined
            ReleaseDate?: string | undefined
            Score?: number | undefined
            ShowWithoutStock?: boolean | undefined
            SupplierId?: (number | null) | undefined
            TaxCode?: string | undefined
            Title?: string | undefined
          }
        }
        output: {
          AdWordsRemarketingCode?: string | undefined
          BrandId?: number | undefined
          CategoryId?: number | undefined
          DepartmentId?: number | undefined
          Description?: string | undefined
          DescriptionShort?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsVisible?: boolean | undefined
          KeyWords?: string | undefined
          LinkId?: string | undefined
          LomadeeCampaignCode?: string | undefined
          MetaTagDescription?: string | undefined
          Name?: string | undefined
          RefId?: string | undefined
          ReleaseDate?: string | undefined
          Score?: number | undefined
          ShowWithoutStock?: boolean | undefined
          SupplierId?: (number | null) | undefined
          TaxCode?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          AdWordsRemarketingCode?: string | undefined
          BrandId?: number | undefined
          CategoryId?: number | undefined
          DepartmentId?: number | undefined
          Description?: string | undefined
          DescriptionShort?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsVisible?: boolean | undefined
          KeyWords?: string | undefined
          LinkId?: string | undefined
          LomadeeCampaignCode?: string | undefined
          MetaTagDescription?: string | undefined
          Name?: string | undefined
          RefId?: string | undefined
          ReleaseDate?: string | undefined
          Score?: number | undefined
          ShowWithoutStock?: boolean | undefined
          SupplierId?: (number | null) | undefined
          TaxCode?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            AdWordsRemarketingCode?: string | undefined
            BrandId: number
            CategoryId: number
            DepartmentId?: number | undefined
            Description?: string | undefined
            DescriptionShort?: string | undefined
            IsActive?: boolean | undefined
            IsVisible?: boolean | undefined
            KeyWords?: string | undefined
            LinkId?: string | undefined
            LomadeeCampaignCode?: string | undefined
            MetaTagDescription?: string | undefined
            Name: string
            RefId?: string | undefined
            ReleaseDate?: string | undefined
            Score?: number | undefined
            ShowWithoutStock?: boolean | undefined
            SupplierId?: (number | null) | undefined
            TaxCode?: string | undefined
            Title?: string | undefined
          }
        }
        output: {
          AdWordsRemarketingCode?: string | undefined
          BrandId?: number | undefined
          CategoryId?: number | undefined
          DepartmentId?: number | undefined
          Description?: string | undefined
          DescriptionShort?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsVisible?: boolean | undefined
          KeyWords?: string | undefined
          LinkId?: string | undefined
          LomadeeCampaignCode?: string | undefined
          MetaTagDescription?: string | undefined
          Name?: string | undefined
          RefId?: string | undefined
          ReleaseDate?: string | undefined
          Score?: number | undefined
          ShowWithoutStock?: boolean | undefined
          SupplierId?: (number | null) | undefined
          TaxCode?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/salespolicy': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { ProductId?: number | undefined; StoreId?: number | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/salespolicy/:tradepolicyId': {
      $delete: {
        input: { param: { productId: number; tradepolicyId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { productId: number; tradepolicyId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/similarcategory/': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { CategoryId?: number | undefined; ProductId?: number | undefined }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/similarcategory/:categoryId': {
      $delete: {
        input: { param: { productId: number; categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { productId: number; categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { ProductId?: number | undefined; StoreId?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/specification': {
      $delete: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          Id?: number | undefined
          ProductId?: number | undefined
          Text?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: { FieldId: number; FieldValueId?: number | undefined; Text?: string | undefined }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          Id?: number | undefined
          ProductId?: number | undefined
          Text?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/specification/:specificationId': {
      $delete: {
        input: { param: { productId: number; specificationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/product/:productId/specificationvalue': {
      $put: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            FieldName: string
            FieldValues: string[]
            GroupName: string
            RootLevelSpecification: boolean
          }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          Id?: number | undefined
          ProductId?: number | undefined
          Text?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuattachment': {
      $delete: {
        input: { query: { skuId?: number | undefined; attachmentId?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { AttachmentId: number; SkuId: number }
        }
        output: {
          AttachmentId?: number | undefined
          Id?: number | undefined
          SkuId?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuattachment/:skuAttachmentAssociationId': {
      $delete: {
        input: { param: { skuAttachmentAssociationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skucomplement': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { ComplementTypeId: number; ParentSkuId: number; SkuId: number }
        }
        output: SkuComplement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skucomplement/:skuComplementId': {
      $delete: {
        input: { param: { skuComplementId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuComplementId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SkuComplement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservice': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            IsActive: boolean
            Name: string
            SkuId: number
            SkuServiceTypeId: number
            SkuServiceValueId: number
            Text: string
          }
        }
        output: SKUService
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservice/:skuServiceId': {
      $delete: {
        input: { param: { skuServiceId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuServiceId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SKUService
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { skuServiceId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            IsActive: boolean
            Name: string
            SkuId: number
            SkuServiceTypeId: number
            SkuServiceValueId: number
            Text: string
          }
        }
        output: SKUService
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicetype': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SKUServiceTypeRequest
        }
        output: SKUServiceTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicetype/:skuServiceTypeId': {
      $delete: {
        input: { param: { skuServiceTypeId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuServiceTypeId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SKUServiceTypeResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { skuServiceTypeId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SKUServiceTypeRequest }
        output: SKUServiceTypeResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicetypeattachment': {
      $delete: {
        input: {
          query: { attachmentId?: number | undefined; skuServiceTypeId?: number | undefined }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { AttachmentId: number; SkuServiceTypeId: number }
        }
        output: {
          AttachmentId?: number | undefined
          Id?: number | undefined
          SkuServiceTypeId?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicetypeattachment/:skuServiceTypeAttachmentId': {
      $delete: {
        input: { param: { skuServiceTypeAttachmentId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicevalue': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SKUServiceValueRequest
        }
        output: SKUServiceValueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/skuservicevalue/:skuServiceValueId': {
      $delete: {
        input: { param: { skuServiceValueId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuServiceValueId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SKUServiceValueResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { skuServiceValueId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SKUServiceValueRequest }
        output: SKUServiceValueResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specification': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            CategoryId?: number | undefined
            DefaultValue?: string | undefined
            Description?: (string | null) | undefined
            FieldGroupId: number
            FieldTypeId: number
            IsActive?: boolean | undefined
            IsFilter?: boolean | undefined
            IsOnProductDetails?: boolean | undefined
            IsRequired?: boolean | undefined
            IsSideMenuLinkActive?: boolean | undefined
            IsStockKeepingUnit?: boolean | undefined
            IsTopMenuLinkActive?: boolean | undefined
            IsWizard?: (boolean | null) | undefined
            Name: string
            Position?: number | undefined
          }
        }
        output: {
          CategoryId?: number | undefined
          DefaultValue?: string | undefined
          Description?: (string | null) | undefined
          FieldGroupId?: number | undefined
          FieldTypeId?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsFilter?: boolean | undefined
          IsOnProductDetails?: boolean | undefined
          IsRequired?: boolean | undefined
          IsSideMenuLinkActive?: boolean | undefined
          IsStockKeepingUnit?: boolean | undefined
          IsTopMenuLinkActive?: boolean | undefined
          IsWizard?: (boolean | null) | undefined
          Name?: string | undefined
          Position?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specification/nonstructured': {
      $delete: {
        input: { query: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          Id?: number | undefined
          SkuId?: number | undefined
          SpecificationName?: string | undefined
          SpecificationValue?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specification/nonstructured/:Id': {
      $delete: {
        input: { param: { Id: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { Id: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          Id?: number | undefined
          SkuId?: number | undefined
          SpecificationName?: string | undefined
          SpecificationValue?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specification/:specificationId': {
      $get: {
        input: { param: { specificationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          CategoryId: number
          DefaultValue: string | null
          Description: string
          FieldGroupId: number
          FieldTypeId: number
          Id: number
          IsActive: boolean
          IsFilter: boolean
          IsOnProductDetails: boolean
          IsRequired: boolean
          IsSideMenuLinkActive: boolean
          IsStockKeepingUnit: boolean
          IsTopMenuLinkActive: boolean
          IsWizard: boolean
          Name: string
          Position: number
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { specificationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            CategoryId: number
            DefaultValue: string
            Description: string
            FieldGroupId: number
            FieldTypeId: number
            IsActive: boolean
            IsFilter: boolean
            IsOnProductDetails: boolean
            IsRequired: boolean
            IsSideMenuLinkActive: boolean
            IsStockKeepingUnit: boolean
            IsTopMenuLinkActive: boolean
            IsWizard: boolean
            Name: string
            Position: number
          }
        }
        output: {
          CategoryId?: number | undefined
          DefaultValue?: string | undefined
          Description?: (string | null) | undefined
          FieldGroupId?: number | undefined
          FieldTypeId?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsFilter?: boolean | undefined
          IsOnProductDetails?: boolean | undefined
          IsRequired?: boolean | undefined
          IsSideMenuLinkActive?: boolean | undefined
          IsStockKeepingUnit?: boolean | undefined
          IsTopMenuLinkActive?: boolean | undefined
          IsWizard?: (boolean | null) | undefined
          Name?: string | undefined
          Position?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specificationgroup': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SpecificationGroupInsertRequest
        }
        output: {
          CategoryId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          Position?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specificationgroup/:groupId': {
      $put: {
        input: { param: { groupId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { CategoryId: number; Id: number; Name: string; Position: number } }
        output: {
          CategoryId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          Position?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specificationvalue': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            FieldId: number
            IsActive?: boolean | undefined
            Name: string
            Position?: number | undefined
            Text?: (string | null) | undefined
          }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Position?: number | undefined
          Text?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/specificationvalue/:specificationValueId': {
      $get: {
        input: { param: { specificationValueId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Position?: number | undefined
          Text?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { specificationValueId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            FieldId: number
            IsActive?: boolean | undefined
            Name: string
            Position?: number | undefined
            Text?: (string | null) | undefined
          }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Position?: number | undefined
          Text?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit': {
      $get: {
        input: { query: { refId: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          ActivateIfPossible?: boolean | undefined
          CommercialConditionId?: number | undefined
          CreationDate?: string | undefined
          CubicWeight?: number | undefined
          EstimatedDateArrival?: (string | null) | undefined
          Height?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsKit?: boolean | undefined
          KitItensSellApart?: boolean | undefined
          Length?: number | undefined
          ManufacturerCode?: string | undefined
          MeasurementUnit?: string | undefined
          ModalType?: (string | null) | undefined
          Name?: string | undefined
          PackagedHeight?: number | undefined
          PackagedLength?: number | undefined
          PackagedWeightKg?: number | undefined
          PackagedWidth?: number | undefined
          ProductId?: number | undefined
          RefId?: string | undefined
          RewardValue?: number | undefined
          UnitMultiplier?: number | undefined
          Videos?: (string | null) | undefined
          WeightKg?: number | undefined
          Width?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            ActivateIfPossible?: boolean | undefined
            CommercialConditionId?: number | undefined
            CreationDate?: string | undefined
            CubicWeight?: number | undefined
            Ean?: string | undefined
            EstimatedDateArrival?: (string | null) | undefined
            Height?: number | undefined
            Id?: number | undefined
            IsActive?: boolean | undefined
            IsKit?: boolean | undefined
            KitItensSellApart?: boolean | undefined
            Length?: number | undefined
            ManufacturerCode?: string | undefined
            MeasurementUnit?: string | undefined
            ModalType?: (string | null) | undefined
            Name: string
            PackagedHeight: number
            PackagedLength: number
            PackagedWeightKg: number
            PackagedWidth: number
            ProductId: number
            RefId?: string | undefined
            RewardValue?: number | undefined
            UnitMultiplier?: number | undefined
            Videos?: string[] | undefined
            WeightKg?: number | undefined
            Width?: number | undefined
          }
        }
        output: {
          ActivateIfPossible?: boolean | undefined
          CommercialConditionId?: number | undefined
          CreationDate?: string | undefined
          CubicWeight?: number | undefined
          Ean?: string | undefined
          EstimatedDateArrival?: (string | null) | undefined
          Height?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsKit?: boolean | undefined
          KitItensSellApart?: boolean | undefined
          Length?: number | undefined
          ManufacturerCode?: string | undefined
          MeasurementUnit?: string | undefined
          ModalType?: (string | null) | undefined
          Name?: string | undefined
          PackagedHeight?: number | undefined
          PackagedLength?: number | undefined
          PackagedWeightKg?: number | undefined
          PackagedWidth?: number | undefined
          ProductId?: number | undefined
          RefId?: string | undefined
          RewardValue?: number | undefined
          UnitMultiplier?: number | undefined
          Videos?: string[] | undefined
          WeightKg?: number | undefined
          Width?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/copy/:skuIdfrom/:skuIdto/file/': {
      $put: {
        input: { param: { skuIdfrom: number; skuIdto: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          ArchiveId?: number | undefined
          Id?: number | undefined
          IsMain?: boolean | undefined
          Label?: (string | null) | undefined
          SkuId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/disassociate/:skuId/file/:skuFileId': {
      $delete: {
        input: { param: { skuId: number; skuFileId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId': {
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          ActivateIfPossible?: boolean | undefined
          CommercialConditionId?: number | undefined
          CreationDate?: string | undefined
          CubicWeight?: number | undefined
          EstimatedDateArrival?: (string | null) | undefined
          Height?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsKit?: boolean | undefined
          KitItensSellApart?: boolean | undefined
          Length?: number | undefined
          ManufacturerCode?: string | undefined
          MeasurementUnit?: string | undefined
          ModalType?: (string | null) | undefined
          Name?: string | undefined
          PackagedHeight?: number | undefined
          PackagedLength?: number | undefined
          PackagedWeightKg?: number | undefined
          PackagedWidth?: number | undefined
          ProductId?: number | undefined
          RefId?: string | undefined
          RewardValue?: number | undefined
          UnitMultiplier?: number | undefined
          Videos?: string[] | undefined
          WeightKg?: number | undefined
          Width?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            ActivateIfPossible?: boolean | undefined
            CommercialConditionId?: number | undefined
            CreationDate?: string | undefined
            CubicWeight?: number | undefined
            EstimatedDateArrival?: (string | null) | undefined
            Height?: number | undefined
            IsActive?: boolean | undefined
            IsKit?: boolean | undefined
            KitItensSellApart?: boolean | undefined
            Length?: number | undefined
            ManufacturerCode?: string | undefined
            MeasurementUnit?: string | undefined
            ModalType?: (string | null) | undefined
            Name: string
            PackagedHeight: number
            PackagedLength: number
            PackagedWeightKg: number
            PackagedWidth: number
            ProductId: number
            RefId?: string | undefined
            RewardValue?: number | undefined
            UnitMultiplier?: number | undefined
            Videos?: string[] | undefined
            WeightKg?: number | undefined
            Width?: number | undefined
          }
        }
        output: {
          ActivateIfPossible?: boolean | undefined
          CommercialConditionId?: number | undefined
          CreationDate?: string | undefined
          CubicWeight?: number | undefined
          EstimatedDateArrival?: (string | null) | undefined
          Height?: number | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsKit?: boolean | undefined
          KitItensSellApart?: boolean | undefined
          Length?: number | undefined
          ManufacturerCode?: string | undefined
          MeasurementUnit?: string | undefined
          ModalType?: (string | null) | undefined
          Name?: string | undefined
          PackagedHeight?: number | undefined
          PackagedLength?: number | undefined
          PackagedWeightKg?: number | undefined
          PackagedWidth?: number | undefined
          ProductId?: number | undefined
          RefId?: string | undefined
          RewardValue?: number | undefined
          UnitMultiplier?: number | undefined
          Videos?: string[] | undefined
          WeightKg?: number | undefined
          Width?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/attachment': {
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          AttachmentId?: number | undefined
          Id?: number | undefined
          SkuId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/complement': {
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: SkuComplement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/complement/:complementTypeId': {
      $get: {
        input: { param: { skuId: number; complementTypeId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SkuComplement
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/ean': {
      $delete: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: string[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/ean/:ean': {
      $delete: {
        input: { param: { skuId: number; ean: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $post: {
        input: { param: { skuId: number; ean: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/file': {
      $delete: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          ArchiveId?: number | undefined
          Id?: number | undefined
          IsMain?: boolean | undefined
          Label?: (string | null) | undefined
          Name?: string | undefined
          SkuId?: number | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SKUFileURL } & { form: SKUFile }
        output: {
          ArchiveId?: number | undefined
          Id?: number | undefined
          IsMain?: boolean | undefined
          Label?: string | undefined
          SkuId?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/file/:skuFileId': {
      $delete: {
        input: { param: { skuId: number; skuFileId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { skuId: number; skuFileId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SKUFileURL }
        output: {
          ArchiveId?: number | undefined
          Id?: number | undefined
          IsMain?: boolean | undefined
          Label?: string | undefined
          SkuId?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/specification': {
      $delete: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { skuId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: SKUSpecificationResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { FieldId: number; FieldValueId?: number | undefined } }
        output: SKUSpecificationResponse
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            FieldId: number
            FieldValueId: number
            Id: number
            SkuId?: number | undefined
            Text?: string | undefined
          }
        }
        output: SKUSpecificationResponse[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/specification/:specificationId': {
      $delete: {
        input: { param: { skuId: number; specificationId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunit/:skuId/specificationvalue': {
      $put: {
        input: { param: { skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            FieldName: string
            FieldValues: string[]
            GroupName: string
            RootLevelSpecification: boolean
          }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          Id?: number | undefined
          SkuId?: number | undefined
          Text?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunitkit': {
      $delete: {
        input: { query: { skuId?: number | undefined; parentSkuId?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { query: { skuId?: number | undefined; parentSkuId?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SkuKit
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            Quantity: number
            StockKeepingUnitId: number
            StockKeepingUnitParent: number
            UnitPrice: number
          }
        }
        output: SkuKit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/stockkeepingunitkit/:kitId': {
      $delete: {
        input: { param: { kitId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { kitId: number } } & { header: { 'Content-Type': string; Accept: string } }
        output: SkuKit
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: {
            CollectionId: number
            Name: string
            PreSale: boolean
            Release: boolean
            Type: string
          }
        }
        output: {
          CollectionId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          PreSale?: boolean | undefined
          Release?: boolean | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId': {
      $delete: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          CollectionId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          PreSale?: boolean | undefined
          Release?: boolean | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & {
          json: {
            CollectionId: number
            Name: string
            PreSale: boolean
            Release: boolean
            Type: string
          }
        }
        output: {
          CollectionId?: number | undefined
          Id?: number | undefined
          Name?: string | undefined
          PreSale?: boolean | undefined
          Release?: boolean | undefined
          Type?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/brand': {
      $post: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { BrandId: number } }
        output: { BrandId?: number | undefined; SubCollectionId?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:brandId': {
      $delete: {
        input: { param: { subCollectionId: number; brandId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/brand/:categoryId': {
      $delete: {
        input: { param: { subCollectionId: number; categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/category': {
      $post: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { CategoryId: number } }
        output: { CategoryId?: number | undefined; SubCollectionId?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit': {
      $post: {
        input: { param: { subCollectionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: { SkuId: number } }
        output: { SkuId?: number | undefined; SubCollectionId?: number | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/subcollection/:subCollectionId/stockkeepingunit/:skuId': {
      $delete: {
        input: { param: { subCollectionId: number; skuId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/supplier': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & { json: SupplierRequest }
        output: SupplierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog/pvt/supplier/:supplierId': {
      $delete: {
        input: { param: { supplierId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
      $put: {
        input: { param: { supplierId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: SupplierRequest }
        output: SupplierResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/category/tree/:categoryLevels': {
      $get: {
        input: { param: { categoryLevels: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: GetCategoryTree[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/products/variations/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          available?: boolean | undefined
          dimensions?: string[] | undefined
          dimensionsInputType?: { [x: string]: string } | undefined
          dimensionsMap?: { [x: string]: { [x: string]: unknown }[] } | undefined
          displayMode?: string | undefined
          name?: string | undefined
          productId?: number | undefined
          salesChannel?: string | undefined
          skus?:
            | {
                available?: boolean | undefined
                availablequantity?: number | undefined
                bestPrice?: number | undefined
                bestPriceFormated?: string | undefined
                cacheVersionUsedToCallCheckout?: (string | null) | undefined
                dimensions?: { [x: string]: string } | undefined
                image?: string | undefined
                installments?: number | undefined
                installmentsInsterestRate?: (number | null) | undefined
                installmentsValue?: number | undefined
                listPrice?: number | undefined
                listPriceFormated?: string | undefined
                measures?:
                  | {
                      cubicweight?: number | undefined
                      height?: number | undefined
                      length?: number | undefined
                      weight?: number | undefined
                      width?: number | undefined
                    }
                  | undefined
                rewardValue?: number | undefined
                sellerId?: string | undefined
                sku?: number | undefined
                skuname?: string | undefined
                spotPrice?: number | undefined
                taxAsInt?: number | undefined
                taxFormated?: string | undefined
                unitMultiplier?: number | undefined
              }[]
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/saleschannel/:salesChannelId': {
      $get: {
        input: { param: { salesChannelId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          ConditionRule?: (string | null) | undefined
          CountryCode?: string | undefined
          CultureInfo?: string | undefined
          CurrencyCode?: string | undefined
          CurrencyDecimalDigits?: number | undefined
          CurrencyFormatInfo?:
            | {
                CurrencyDecimalDigits?: number | undefined
                CurrencyDecimalSeparator?: string | undefined
                CurrencyGroupSeparator?: string | undefined
                CurrencyGroupSize?: number | undefined
                StartsWithCurrencySymbol?: boolean | undefined
              }
            | undefined
          CurrencyLocale?: number | undefined
          CurrencySymbol?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Origin?: (string | null) | undefined
          Position?: (number | null) | undefined
          ProductClusterId?: (number | null) | undefined
          TimeZone?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/sku/stockkeepingunitidsbyrefids': {
      $post:
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & { json: string[] }
            output: { [x: string]: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Content-Type': string; Accept: string } } & { json: string[] }
            output: {}
            outputFormat: string
            status: 500
          }
    }
  } & {
    '/api/catalog_system/pub/specification/field/listByCategoryId/:categoryId': {
      $get: {
        input: { param: { categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: CategorySpecification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/specification/field/listTreeByCategoryId/:categoryId': {
      $get: {
        input: { param: { categoryId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: CategorySpecification
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/specification/fieldGet/:fieldId': {
      $get: {
        input: { param: { fieldId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          DefaultValue?: (string | null) | undefined
          Description?: (string | null) | undefined
          FieldGroupId?: number | undefined
          FieldGroupName?: string | undefined
          FieldId?: number | undefined
          FieldTypeId?: number | undefined
          FieldTypeName?: string | undefined
          FieldValueId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsFilter?: boolean | undefined
          IsOnProductDetails?: boolean | undefined
          IsRequired?: boolean | undefined
          IsSideMenuLinkActive?: boolean | undefined
          IsStockKeepingUnit?: boolean | undefined
          IsTopMenuLinkActive?: boolean | undefined
          IsWizard?: (boolean | null) | undefined
          Name?: string | undefined
          Position?: number | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/specification/fieldvalue/:fieldId': {
      $get: {
        input: { param: { fieldId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: GetSpecFieldValue[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pub/specification/groupGet/:groupId': {
      $get: {
        input: { param: { groupId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SpecificationsGroup
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/brand/list': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: BrandGet[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/brand/pagedlist': {
      $get: {
        input: { query: { pageSize: number; page: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          items: BrandGet[]
          paging: { page: number; pages: number; perPage: number; total: number }
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/brand/:brandId': {
      $get: {
        input: { param: { brandId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: BrandGet
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/collection/search': {
      $get: {
        input: { query: { page: number; pageSize: number; orderByAsc: boolean } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/collection/search/:searchTerms': {
      $get: {
        input: { param: { searchTerms: string } } & {
          query: {
            page?: number | undefined
            pageSize?: number | undefined
            orderByAsc?: boolean | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/commercialcondition/list': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          Id?: number | undefined
          IsDefault?: boolean | undefined
          Name?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/commercialcondition/:commercialConditionId': {
      $get: {
        input: { param: { commercialConditionId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          Id?: number | undefined
          IsDefault?: boolean | undefined
          Name?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/products/GetIndexedInfo/:productId': {
      $get: {
        input: { param: { productId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/products/GetProductAndSkuIds': {
      $get: {
        input: {
          query: {
            categoryId?: number | undefined
            _from?: number | undefined
            _to?: number | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          data?: { 'Product ID'?: { [x: string]: unknown }[] | undefined } | undefined
          range?:
            | { from?: number | undefined; to?: number | undefined; total?: number | undefined }
            | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/products/productget/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          AdWordsRemarketingCode?: string | undefined
          BrandId?: number | undefined
          CategoryId?: number | undefined
          DepartmentId?: number | undefined
          Description?: string | undefined
          DescriptionShort?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsVisible?: boolean | undefined
          KeyWords?: string | undefined
          LinkId?: string | undefined
          ListStoreId?: { [x: string]: unknown }[] | undefined
          LomadeeCampaignCode?: string | undefined
          MetaTagDescription?: string | undefined
          Name?: string | undefined
          RefId?: string | undefined
          ReleaseDate?: string | undefined
          ShowWithoutStock?: boolean | undefined
          SupplierId?: number | undefined
          TaxCode?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/products/productgetbyrefid/:refId': {
      $get: {
        input: { param: { refId: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          AdWordsRemarketingCode?: string | undefined
          BrandId?: number | undefined
          CategoryId?: number | undefined
          DepartmentId?: number | undefined
          Description?: string | undefined
          DescriptionShort?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          IsVisible?: boolean | undefined
          KeyWords?: string | undefined
          LinkId?: string | undefined
          ListStoreId?: number[] | undefined
          LomadeeCampaignCode?: string | undefined
          MetaTagDescription?: string | undefined
          Name?: string | undefined
          RefId?: string | undefined
          ReleaseDate?: string | undefined
          ShowWithoutStock?: boolean | undefined
          SupplierId?: number | undefined
          TaxCode?: string | undefined
          Title?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/products/:productId/specification': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: GetorUpdateProductSpecification[]
        outputFormat: 'json'
        status: 200
      }
      $post: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        } & { json: GetorUpdateProductSpecification[] }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/saleschannel/list': {
      $get: {
        input: { header: { 'Content-Type': string; Accept: string } }
        output: {
          ConditionRule?: (string | null) | undefined
          CountryCode?: string | undefined
          CultureInfo?: string | undefined
          CurrencyCode?: string | undefined
          CurrencyDecimalDigits?: number | undefined
          CurrencyFormatInfo?:
            | {
                CurrencyDecimalDigits?: number | undefined
                CurrencyDecimalSeparator?: string | undefined
                CurrencyGroupSeparator?: string | undefined
                CurrencyGroupSize?: number | undefined
                StartsWithCurrencySymbol?: boolean | undefined
              }
            | undefined
          CurrencyLocale?: number | undefined
          CurrencySymbol?: string | undefined
          Id?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Origin?: (string | null) | undefined
          Position?: (number | null) | undefined
          ProductClusterId?: (number | null) | undefined
          TimeZone?: string | undefined
        }[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/seller': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: CreateSellerRequest
        }
        output: {
          ArchiveId?: (number | null) | undefined
          CNPJ?: string | undefined
          CSCIdentification?: string | undefined
          CatalogSystemEndpoint?: string | undefined
          CategoryCommissionPercentage?: string | undefined
          DeliveryPolicy?: string | undefined
          Description?: string | undefined
          Email?: string | undefined
          ExchangeReturnPolicy?: string | undefined
          FreightCommissionPercentage?: number | undefined
          FulfillmentEndpoint?: (string | null) | undefined
          FulfillmentSellerId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsBetterScope?: boolean | undefined
          MerchantName?: string | undefined
          Name?: string | undefined
          Password?: (string | null) | undefined
          ProductCommissionPercentage?: number | undefined
          SecutityPrivacyPolicy?: string | undefined
          SellerId?: string | undefined
          SellerType?: number | undefined
          TrustPolicy?: string | undefined
          UrlLogo?: (string | null) | undefined
          UseHybridPaymentOptions?: boolean | undefined
          UserName?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: UpdateSellerRequest
        }
        output: {
          ArchiveId?: (number | null) | undefined
          CNPJ?: string | undefined
          CSCIdentification?: string | undefined
          CatalogSystemEndpoint?: string | undefined
          CategoryCommissionPercentage?: string | undefined
          DeliveryPolicy?: string | undefined
          Description?: string | undefined
          Email?: string | undefined
          ExchangeReturnPolicy?: string | undefined
          FreightCommissionPercentage?: number | undefined
          FulfillmentEndpoint?: (string | null) | undefined
          FulfillmentSellerId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsBetterScope?: boolean | undefined
          MerchantName?: string | undefined
          Name?: string | undefined
          Password?: (string | null) | undefined
          ProductCommissionPercentage?: number | undefined
          SecutityPrivacyPolicy?: string | undefined
          SellerId?: string | undefined
          SellerType?: number | undefined
          TrustPolicy?: string | undefined
          UrlLogo?: (string | null) | undefined
          UseHybridPaymentOptions?: boolean | undefined
          UserName?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/seller/list': {
      $get: {
        input: {
          query: {
            sc?: number | undefined
            sellerType?: number | undefined
            isBetterScope?: boolean | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: {
          ArchiveId?: (number | null) | undefined
          CNPJ?: string | undefined
          CSCIdentification?: string | undefined
          CatalogSystemEndpoint?: string | undefined
          CategoryCommissionPercentage?: string | undefined
          DeliveryPolicy?: string | undefined
          Description?: string | undefined
          Email?: string | undefined
          ExchangeReturnPolicy?: string | undefined
          FreightCommissionPercentage?: number | undefined
          FulfillmentEndpoint?: (string | null) | undefined
          FulfillmentSellerId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsBetterScope?: boolean | undefined
          MerchantName?: string | undefined
          Name?: string | undefined
          Password?: (string | null) | undefined
          ProductCommissionPercentage?: number | undefined
          SecutityPrivacyPolicy?: string | undefined
          SellerId?: string | undefined
          SellerType?: number | undefined
          TrustPolicy?: string | undefined
          UrlLogo?: (string | null) | undefined
          UseHybridPaymentOptions?: boolean | undefined
          UserName?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/seller/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          ArchiveId?: (number | null) | undefined
          CNPJ?: string | undefined
          CSCIdentification?: string | undefined
          CatalogSystemEndpoint?: string | undefined
          CategoryCommissionPercentage?: string | undefined
          DeliveryPolicy?: string | undefined
          Description?: string | undefined
          Email?: string | undefined
          ExchangeReturnPolicy?: string | undefined
          FreightCommissionPercentage?: number | undefined
          FulfillmentEndpoint?: (string | null) | undefined
          FulfillmentSellerId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsBetterScope?: boolean | undefined
          MerchantName?: string | undefined
          Name?: string | undefined
          Password?: (string | null) | undefined
          ProductCommissionPercentage?: number | undefined
          SecutityPrivacyPolicy?: string | undefined
          SellerId?: string | undefined
          SellerType?: number | undefined
          TrustPolicy?: string | undefined
          UrlLogo?: string | undefined
          UseHybridPaymentOptions?: boolean | undefined
          UserName?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sellers/:sellerId': {
      $get: {
        input: { param: { sellerId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          ArchiveId?: (number | null) | undefined
          CNPJ?: string | undefined
          CSCIdentification?: string | undefined
          CatalogSystemEndpoint?: string | undefined
          CategoryCommissionPercentage?: string | undefined
          DeliveryPolicy?: string | undefined
          Description?: string | undefined
          Email?: (string | null) | undefined
          ExchangeReturnPolicy?: string | undefined
          FreightCommissionPercentage?: number | undefined
          FulfillmentEndpoint?: (string | null) | undefined
          FulfillmentSellerId?: (number | null) | undefined
          IsActive?: boolean | undefined
          IsBetterScope?: boolean | undefined
          MerchantName?: string | undefined
          Name?: (string | null) | undefined
          Password?: (string | null) | undefined
          ProductCommissionPercentage?: number | undefined
          SecutityPrivacyPolicy?: string | undefined
          SellerId?: string | undefined
          SellerType?: number | undefined
          TrustPolicy?: string | undefined
          UrlLogo?: string | undefined
          UseHybridPaymentOptions?: boolean | undefined
          UserName?: (string | null) | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/associateattachments': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: { AttachmentNames: string[]; SkuId: number }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/complements/:parentSkuId/:type': {
      $get: {
        input: { param: { parentSkuId: number; type: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: { ComplementSkuIds: number[]; ParentSkuId: number; Type: string }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitByProductId/:productId': {
      $get: {
        input: { param: { productId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SkulistbyProductId[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitbyalternateId/:alternateId': {
      $get: {
        input: { param: { alternateId: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: GetSKUAltID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitbyean/:ean': {
      $get: {
        input: { param: { ean: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: GetSKUAltID
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitbyid/:skuId': {
      $get: {
        input: { param: { skuId: number } } & { query: { sc?: number | undefined } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: GetSKUandContext
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitidbyrefid/:refId': {
      $get: {
        input: { param: { refId: string } } & { header: { 'Content-Type': string; Accept: string } }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitids': {
      $get: {
        input: { query: { page: number; pagesize: number } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: number[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/sku/stockkeepingunitidsbysaleschannel': {
      $get: {
        input: {
          query: {
            sc: number
            page?: number | undefined
            pageSize?: number | undefined
            onlyAssigned?: boolean | undefined
          }
        } & { header: { 'Content-Type': string; Accept: string } }
        output: number[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/skuseller/changenotification/:sellerId/:sellerSkuId': {
      $post: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 204
      }
    }
  } & {
    '/api/catalog_system/pvt/skuseller/changenotification/:skuId': {
      $post:
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 200
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 403
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: string
            outputFormat: 'text'
            status: 404
          }
        | {
            input: { param: { skuId: string } } & {
              header: { 'Content-Type': string; Accept: string }
            }
            output: {}
            outputFormat: string
            status: 429
          }
    }
  } & {
    '/api/catalog_system/pvt/skuseller/remove/:sellerId/:sellerSkuId': {
      $post: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/skuseller/:sellerId/:sellerSkuId': {
      $get: {
        input: { param: { sellerId: string; sellerSkuId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          IsActive: boolean
          IsPersisted: boolean
          IsRemoved: boolean
          RequestedUpdateDate: string | null
          SellerId: string
          SellerStockKeepingUnitId: string
          SkuSellerId: number
          StockKeepingUnitId: number
          UpdateDate: string
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/specification/field': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SpecificationsInsertFieldRequest
        }
        output: number
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SpecificationsInsertFieldUpdateRequest
        }
        output: number
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/specification/fieldValue': {
      $post: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SpecificationsInsertFieldValueRequest
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Position?: number | undefined
          Text?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { header: { 'Content-Type': string; Accept: string } } & {
          json: SpecificationsUpdateFieldValueRequest
        }
        output: string
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/specification/fieldValue/:fieldValueId': {
      $get: {
        input: { param: { fieldValueId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: {
          FieldId?: number | undefined
          FieldValueId?: number | undefined
          IsActive?: boolean | undefined
          Name?: string | undefined
          Position?: number | undefined
          Text?: string | undefined
        }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/api/catalog_system/pvt/specification/groupbycategory/:categoryId': {
      $get: {
        input: { param: { categoryId: string } } & {
          header: { 'Content-Type': string; Accept: string }
        }
        output: SpecificationsGroup[]
        outputFormat: 'json'
        status: 200
      }
    }
  },
  '/'
>
export default routes
