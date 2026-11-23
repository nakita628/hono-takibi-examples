import { z } from '@hono/zod-openapi'

type TopCatType = { subcategories?: TopCatType[] }

const TopCatSchema: z.ZodType<TopCatType> = z
  .lazy(() =>
    z.object({ subcategories: z.array(TopCatSchema).exactOptional() }).openapi({ required: [] }),
  )
  .openapi('TopCat')

const TopSchema = z
  .object({ cat: TopCatSchema.exactOptional() })
  .openapi({ required: [] })
  .openapi('Top')
