type OptionOneNoDisc = { discrim: string; optionone?: number | undefined }
type OptionTwoNoDisc = { discrim: string; optiontwo?: string | undefined }
type Cat = { pet_type: string; hunts?: boolean | undefined; age?: number | undefined }
type Dog = {
  pet_type: string
  bark?: boolean | undefined
  breed?: 'Dingo' | 'Husky' | 'Retriever' | 'Shepherd' | undefined
}
type CatNoDisc = { pet_type: string; hunts?: boolean | undefined; age?: number | undefined }
type DogNoDisc = {
  pet_type: string
  bark?: boolean | undefined
  breed?: 'Dingo' | 'Husky' | 'Retriever' | 'Shepherd' | undefined
}
type Object1 = { a?: string | undefined; b?: string | undefined }
type Object2 = { c?: string | undefined; d?: string | undefined }
type OptionThreeNoDisc = { discrim: string; optionthree?: string | undefined }
type GcsImport = { gcs_bucket?: string | undefined; gcs_prefix?: string | undefined }
type S3Import = { s3_bucket?: string | undefined; s3_prefix?: string | undefined }
type BaseVehicle = {
  vehicleType?: string | undefined
  idealTerrain?: string | undefined
  powerSource?: string | undefined
  topSpeed?: number | undefined
  range?: number | undefined
}
type ApplicationApprovedEvent = {
  event_type: 'application_approved' | 'application_denied'
  event_id: string
  buyer_id: string
  order_id?: string | undefined
}
type ApplicationDeniedEvent = {
  event_type: 'application_approved' | 'application_denied'
  event_id: string
  buyer_id: string
  order_id?: string | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/discriminator-with-mapping': {
      $patch: {
        input: { json: OptionOneNoDisc | OptionTwoNoDisc }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/discriminator-with-no-mapping': {
      $patch: {
        input: { json: OptionOneNoDisc | OptionTwoNoDisc }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/embedded-discriminator': {
      $patch: { input: { json: Cat | Dog }; output: {}; outputFormat: string; status: 200 }
    }
  } & {
    '/oneof-allof-top-level-disc': {
      $patch: {
        input: { json: CatNoDisc | DogNoDisc }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/nested-one-of-object-with-nested-one-of': {
      $patch: {
        input: { json: { config?: Object1 | Object2 | Cat | Dog | undefined } }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/mapping-with-duplicate-schemas': {
      $patch: {
        input: { json: OptionOneNoDisc | OptionTwoNoDisc | OptionThreeNoDisc }
        output: {}
        outputFormat: string
        status: 201
      }
    }
  } & {
    '/mapping-of-schema-names': {
      $patch: {
        input: { json: OptionOneNoDisc | OptionTwoNoDisc }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/improper-discriminator-placement': {
      $patch: {
        input: {
          json: {
            connector_type?: 's3Import' | 'gcsImport' | undefined
            connector_properties?: GcsImport | S3Import | undefined
          }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/redocly-flavored-discriminator': {
      $patch: {
        input: {
          json: { vehicle?: BaseVehicle | undefined; some_other_property?: string | undefined }
        }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  } & {
    '/potentially-undefined-formData': {
      $post: {
        input: { json: ApplicationApprovedEvent | ApplicationDeniedEvent }
        output: {}
        outputFormat: string
        status: 200
      }
    }
  },
  '/'
>
export default routes
