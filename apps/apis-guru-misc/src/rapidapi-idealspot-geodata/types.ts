type Datum = { description: string; id: string; name: string; version: string }
type ListAllLocalInsights = { data: Datum[] }
type Category = { description: string; id: number; label: string; parent_id: string }
type Parameters = { category: Category[] }
type Data = {
  description: string
  groups: string[]
  id: string
  name: string
  parameters: Parameters
  periods: string[]
  slug: string
  version: string
}
type DescribeOccupationInsight = { data: Data }
type Location1 = {
  areatype: string
  latitude: number
  longitude: number
  radius: number
  type: string
  units: string
}
type Units = {
  '$100k-125k': string
  '$10k-15k': string
  '$125k-150k': string
  '$150k-175k': string
  '$15k-20k': string
  '$175k-200k': string
  '$200k-250k': string
  '$20k-25k': string
  '$250k-300k': string
  '$25k-30k': string
  '$300k-400k': string
  '$30k-35k': string
  '$35k-40k': string
  '$400k-500k': string
  '$40k-50k': string
  '$500k-750k': string
  '$50k-60k': string
  '$60k-70k': string
  '$70k-80k': string
  '$750k-1M': string
  '$80k-90k': string
  '$90k-100k': string
  'Median Home Value': string
  'Over $1M': string
  'Owner Occupied Households': string
  'Under $10k': string
  'context.households': string
  'context.landarea': string
}
type Metadata = { datetime: string[][]; display_groups: string[][]; units: Units }
type Data1 = { data: string[][]; location: Location1; location_index: number; metadata: Metadata }
type Homevalueswithin1miRadiusofLocation = { data: Data1[] }
type Geometry = { coordinates: number[][]; type: string }
type Location3 = {
  areatype: string
  latitude: number
  longitude: number
  radius: string
  type: string
  units: string
}
type Properties2 = { calculated_area_sq_meters: number; location: Location3; status: number }
type Feature = { geometry: Geometry; properties: Properties2; type: string }
type Data3 = { features: Feature[]; type: string }
type Describetheregionwithin5minutedriveTimeofageographicpoint = { data: Data3 }
type Properties1 = {
  AFFGEOID?: string | undefined
  ALAND: number
  AWATER?: number | undefined
  BLKGRPCE?: string | undefined
  CBSAFP?: string | undefined
  CLASSFP?: string | undefined
  COUNTYFP?: string | undefined
  COUNTYNS?: string | undefined
  CSAFP?: string | undefined
  DIVISION?: string | undefined
  FUNCSTAT?: string | undefined
  GEOID?: string | undefined
  INTPTLAT?: string | undefined
  INTPTLON?: string | undefined
  LSAD?: string | undefined
  MEMI?: string | undefined
  METDIVFP?: string | undefined
  MTFCC?: string | undefined
  NAME?: string | undefined
  NAMELSAD?: string | undefined
  PCICBSA?: string | undefined
  PCINECTA?: string | undefined
  PLACEFP?: string | undefined
  PLACENS?: string | undefined
  POPULATION?: number | undefined
  POP_SQMI?: number | undefined
  PO_NAME?: string | undefined
  REGION?: string | undefined
  SQMI?: number | undefined
  STATE?: string | undefined
  STATEFP?: string | undefined
  STATENS?: string | undefined
  STUSPS?: string | undefined
  Shape_Area?: number | undefined
  Shape_Leng?: number | undefined
  TRACTCE?: string | undefined
  ZIP_CODE?: string | undefined
}
type Autocomplete = { input: string[] }
type Properties = {
  _properties: Properties1
  altname: string
  autocomplete: Autocomplete
  calculated_area_sq_meters: number
  name: string
  region_id: string
  regiontype: string
  state_code: string
  timestamp: string
}
type Data2 = { geometry: Geometry; properties: Properties; type: string }
type FetchAdministrativeRegionsusingLatLng = { data: Data2[] }
type Metadata1 = {
  bearing: string
  columns: string[]
  name: string
  rows: string[]
  segment_id: string
  state: string
}
type Roadsegment = { coordinates: number[][]; type: string }
type Stats = { aadt: number }
type Data5 = { data: number[][]; metadata: Metadata1; roadsegment: Roadsegment; stats: Stats }
type VehicleTrafficCountsforRoadSegment = { data: Data5[] }
type Properties4 = { name: string }
type Crs = { properties: Properties4; type: string }
type Properties3 = { bearing: string; roadname: string; segment_id: string; state: string }
type Feature1 = { geometry: Geometry; properties: Properties3; type: string }
type Data4 = { crs: Crs; features: Feature1[]; type: string }
type SearchRoadSegments = { data: Data4 }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/data/insights': {
      $get: {
        input: { header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string } }
        output: ListAllLocalInsights
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/data/insights/:insight_id:': {
      $get: {
        input: { param: { 'insight_id:': string } } & {
          header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string }
        }
        output: DescribeOccupationInsight
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/data/insights/:insight_id:/query': {
      $get: {
        input: { param: { 'insight_id:': string } } & {
          query: { version: string; 'location[]': string }
        } & { header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string } }
        output: Homevalueswithin1miRadiusofLocation
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/geometries/geometry': {
      $get: {
        input: { query: { 'location[]': string } } & {
          header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string }
        }
        output: Describetheregionwithin5minutedriveTimeofageographicpoint
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/geometries/regions/intersecting/:latitude/:longitude': {
      $get: {
        input: { param: { latitude: number; longitude: number } } & {
          header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string }
        }
        output: FetchAdministrativeRegionsusingLatLng
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/traffic/counts/:segment_id': {
      $get: {
        input: { param: { segment_id: number } } & {
          header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string }
        }
        output: VehicleTrafficCountsforRoadSegment
        outputFormat: 'text'
        status: 200
      }
    }
  } & {
    '/traffic/roads/nearest/:latitude/:longitude': {
      $get: {
        input: { param: { latitude: number; longitude: number } } & { query: { n: number } } & {
          header: { 'X-RapidAPI-Key': string; 'X-RapidAPI-Host': string }
        }
        output: SearchRoadSegments
        outputFormat: 'text'
        status: 200
      }
    }
  },
  '/'
>
export default routes
