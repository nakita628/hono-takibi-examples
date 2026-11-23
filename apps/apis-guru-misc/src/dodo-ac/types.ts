type NHArtwork = {
  art_name?: string | undefined
  art_style?: string | undefined
  authenticity?: string | undefined
  author?: string | undefined
  availability?: string | undefined
  buy?: number | undefined
  description?: string | undefined
  fake_image_url?: string | undefined
  has_fake?: boolean | undefined
  image_url?: string | undefined
  length?: number | undefined
  name?: string | undefined
  sell?: number | undefined
  url?: string | undefined
  width?: number | undefined
  year?: string | undefined
}
type Error401 = { details?: string | undefined; title?: string | undefined }
type Error500 = { details?: string | undefined; title?: string | undefined }
type NHBug = {
  catchphrases?: string[] | undefined
  image_url?: string | undefined
  location?: string | undefined
  name?: string | undefined
  north?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '2'?: string | undefined
              '3'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
            }
          | undefined
      }
    | undefined
  number?: number | undefined
  rarity?: string | undefined
  render_url?: string | undefined
  sell_flick?: number | undefined
  sell_nook?: number | undefined
  south?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '2'?: string | undefined
              '3'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
            }
          | undefined
      }
    | undefined
  tank_length?: number | undefined
  tank_width?: number | undefined
  total_catch?: number | undefined
  url?: string | undefined
}
type Error404 = { details?: string | undefined; title?: string | undefined }
type NHClothing = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  category?:
    | 'Tops'
    | 'Bottoms'
    | 'Dress-up'
    | 'Headwear'
    | 'Accessories'
    | 'Socks'
    | 'Shoes'
    | 'Bags'
    | 'Umbrellas'
    | undefined
  label_themes?:
    | (
        | 'Comfy'
        | 'Everyday'
        | 'Fairy tale'
        | 'Formal'
        | 'Goth'
        | 'Outdoorsy'
        | 'Party'
        | 'Sporty'
        | 'Theatrical'
        | 'Vacation'
        | 'Work'
      )[]
    | undefined
  name?: string | undefined
  notes?: string | undefined
  seasonality?: string | undefined
  sell?: number | undefined
  styles?: ('Active' | 'Cool' | 'Cute' | 'Elegant' | 'Gorgeous' | 'Simple')[] | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  variation_total?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined
  variations?:
    | {
        colors?:
          | (
              | 'Aqua'
              | 'Beige'
              | 'Black'
              | 'Blue'
              | 'Brown'
              | 'Colorful'
              | 'Gray'
              | 'Green'
              | 'Orange'
              | 'Pink'
              | 'Purple'
              | 'Red'
              | 'White'
              | 'Yellow'
            )[]
          | undefined
        image_url?: string | undefined
        variation?: string | undefined
      }[]
    | undefined
  version_added?: string | undefined
  vill_equip?: boolean | undefined
}
type NHEvent = {
  date?: string | undefined
  event?: string | undefined
  type?: 'Event' | 'Nook Shopping' | 'Recipes' | 'Birthday' | undefined
  url?: string | undefined
}
type NHFish = {
  catchphrases?: string[] | undefined
  image_url?: string | undefined
  location?: string | undefined
  name?: string | undefined
  north?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '2'?: string | undefined
              '3'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
            }
          | undefined
      }
    | undefined
  number?: number | undefined
  rarity?: string | undefined
  render_url?: string | undefined
  sell_cj?: number | undefined
  sell_nook?: number | undefined
  shadow_size?:
    | 'X-Small'
    | 'Small'
    | 'Medium'
    | 'Medium w/Fin'
    | 'Large'
    | 'Large w/Fin'
    | 'X-Large'
    | 'XX-Large'
    | 'Long'
    | undefined
  south?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
              "2'"?: string | undefined
              "3'"?: string | undefined
            }
          | undefined
      }
    | undefined
  tank_length?: number | undefined
  tank_width?: number | undefined
  total_catch?: number | undefined
  url?: string | undefined
}
type NHFossilGroupWithIndividualFossilsNoMatched = {
  description?: string | undefined
  fossils?:
    | {
        colors?:
          | (
              | 'Aqua'
              | 'Beige'
              | 'Black'
              | 'Blue'
              | 'Brown'
              | 'Colorful'
              | 'Gray'
              | 'Green'
              | 'Orange'
              | 'Pink'
              | 'Purple'
              | 'Red'
              | 'White'
              | 'Yellow'
            )[]
          | undefined
        fossil_group?: string | undefined
        hha_base?: number | undefined
        image_url?: string | undefined
        interactable?: boolean | undefined
        length?: number | undefined
        name?: string | undefined
        sell?: number | undefined
        url?: string | undefined
        width?: number | undefined
      }[]
    | undefined
  name?: string | undefined
  room?: number | undefined
  url?: string | undefined
}
type NHFossilGroupWithIndividualFossils = {
  description?: string | undefined
  fossils?:
    | {
        colors?:
          | (
              | 'Aqua'
              | 'Beige'
              | 'Black'
              | 'Blue'
              | 'Brown'
              | 'Colorful'
              | 'Gray'
              | 'Green'
              | 'Orange'
              | 'Pink'
              | 'Purple'
              | 'Red'
              | 'White'
              | 'Yellow'
            )[]
          | undefined
        fossil_group?: string | undefined
        hha_base?: number | undefined
        image_url?: string | undefined
        interactable?: boolean | undefined
        length?: number | undefined
        name?: string | undefined
        sell?: number | undefined
        url?: string | undefined
        width?: number | undefined
      }[]
    | undefined
  matched?: { name?: string | undefined; type?: string | undefined } | undefined
  name?: string | undefined
  room?: number | undefined
  url?: string | undefined
}
type NHFossilGroup = {
  description?: string | undefined
  name?: string | undefined
  room?: number | undefined
  url?: string | undefined
}
type NHIndividualFossil = {
  colors?:
    | (
        | 'Aqua'
        | 'Beige'
        | 'Black'
        | 'Blue'
        | 'Brown'
        | 'Colorful'
        | 'Gray'
        | 'Green'
        | 'Orange'
        | 'Pink'
        | 'Purple'
        | 'Red'
        | 'White'
        | 'Yellow'
      )[]
    | undefined
  fossil_group?: string | undefined
  hha_base?: number | undefined
  image_url?: string | undefined
  interactable?: boolean | undefined
  length?: number | undefined
  name?: string | undefined
  sell?: number | undefined
  url?: string | undefined
  width?: number | undefined
}
type NHFurniture = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  category?: 'Housewares' | 'Miscellaneous' | 'Wall-mounted' | undefined
  custom_body_part?: string | undefined
  custom_kit_type?: string | undefined
  custom_kits?: number | undefined
  custom_pattern_part?: string | undefined
  customizable?: boolean | undefined
  door_decor?: boolean | undefined
  functions?:
    | (
        | 'Trash'
        | 'Toilet'
        | 'Table'
        | 'Storage'
        | 'Stereo'
        | 'Seating'
        | 'Lighting'
        | 'Instrument'
        | 'Dresser'
        | 'Bed'
        | 'Audio'
      )[]
    | undefined
  grid_length?: number | undefined
  grid_width?: number | undefined
  height?: number | undefined
  hha_base?: number | undefined
  hha_category?: string | undefined
  item_series?: string | undefined
  item_set?: string | undefined
  lucky?: boolean | undefined
  lucky_season?: '' | 'All year' | 'Spring' | 'Summer' | 'Autumn' | 'Winter' | undefined
  name?: string | undefined
  notes?: string | undefined
  pattern_total?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined
  sell?: number | undefined
  tag?: string | undefined
  themes?: string[] | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  variation_total?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | undefined
  variations?:
    | {
        colors?:
          | (
              | 'Aqua'
              | 'Beige'
              | 'Black'
              | 'Blue'
              | 'Brown'
              | 'Colorful'
              | 'Gray'
              | 'Green'
              | 'Orange'
              | 'Pink'
              | 'Purple'
              | 'Red'
              | 'White'
              | 'Yellow'
            )[]
          | undefined
        image_url?: string | undefined
        pattern?: string | undefined
        variation?: string | undefined
      }[]
    | undefined
  version_added?: string | undefined
}
type NHInterior = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  category?: 'Floors' | 'Wallpaper' | 'Rugs' | undefined
  colors?:
    | 'Aqua'
    | 'Beige'
    | 'Black'
    | 'Blue'
    | 'Brown'
    | 'Colorful'
    | 'Gray'
    | 'Green'
    | 'Orange'
    | 'Pink'
    | 'Purple'
    | 'Red'
    | 'White'
    | 'Yellow'
    | undefined
  grid_length?: number | undefined
  grid_width?: number | undefined
  hha_base?: number | undefined
  hha_category?: string | undefined
  image_url?: string | undefined
  item_series?: string | undefined
  item_set?: string | undefined
  name?: string | undefined
  notes?: string | undefined
  sell?: number | undefined
  tag?: string | undefined
  themes?: string[] | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  version_added?: string | undefined
}
type NHItem = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  edible?: boolean | undefined
  hha_base?: number | undefined
  image_url?: string | undefined
  is_fence?: boolean | undefined
  material_name_sort?: number | undefined
  material_seasonality?: string | undefined
  material_seasonality_sort?: number | undefined
  material_sort?: number | undefined
  material_type?:
    | ''
    | 'Bamboo'
    | 'Mushroom'
    | 'Trash'
    | 'Wood'
    | 'Ore'
    | 'Snowflake'
    | 'Tree'
    | 'Ornament'
    | 'Fruit'
    | 'Underwater'
    | 'Other'
    | 'Leaf'
    | 'Shell'
    | 'Flower'
    | 'Star Fragment'
    | 'Feather'
    | 'Egg'
    | 'Plant'
    | undefined
  name?: string | undefined
  notes?: string | undefined
  plant_type?: '' | 'Pumpkin' | 'Flower' | 'Bush' | 'Tree' | undefined
  sell?: number | undefined
  stack?: number | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  version_added?: string | undefined
}
type NHPhoto = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  category?: 'Photos' | 'Posters' | undefined
  custom_body_part?: string | undefined
  custom_kits?: number | undefined
  customizable?: boolean | undefined
  grid_length?: number | undefined
  grid_width?: number | undefined
  interactable?: boolean | undefined
  name?: string | undefined
  sell?: number | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  variations?:
    | {
        colors?:
          | (
              | 'Aqua'
              | 'Beige'
              | 'Black'
              | 'Blue'
              | 'Brown'
              | 'Colorful'
              | 'Gray'
              | 'Green'
              | 'Orange'
              | 'Pink'
              | 'Purple'
              | 'Red'
              | 'White'
              | 'Yellow'
            )[]
          | undefined
        image_url?: string | undefined
        variation?: string | undefined
      }[]
    | undefined
  version_added?: string | undefined
}
type NHRecipe = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  image_url?: string | undefined
  materials?: { count?: number | undefined; name?: string | undefined }[] | undefined
  name?: string | undefined
  recipes_to_unlock?: number | undefined
  sell?: number | undefined
  serial_id?: number | undefined
  url?: string | undefined
}
type NHSeaCreature = {
  catchphrases?: string[] | undefined
  image_url?: string | undefined
  name?: string | undefined
  north?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '2'?: string | undefined
              '3'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
            }
          | undefined
      }
    | undefined
  number?: number | undefined
  rarity?: string | undefined
  render_url?: string | undefined
  sell_nook?: number | undefined
  shadow_movement?:
    | 'Stationary'
    | 'Very slow'
    | 'Slow'
    | 'Medium'
    | 'Fast'
    | 'Very fast'
    | undefined
  shadow_size?: 'X-Small' | 'Small' | 'Medium' | 'Large' | 'X-Large' | undefined
  south?:
    | {
        availability_array?:
          | { months?: string | undefined; time?: string | undefined }[]
          | undefined
        months?: string | undefined
        months_array?: number[] | undefined
        times_by_month?:
          | {
              '1'?: string | undefined
              '2'?: string | undefined
              '3'?: string | undefined
              '4'?: string | undefined
              '5'?: string | undefined
              '6'?: string | undefined
              '7'?: string | undefined
              '8'?: string | undefined
              '9'?: string | undefined
              '10'?: string | undefined
              '11'?: string | undefined
              '12'?: string | undefined
            }
          | undefined
      }
    | undefined
  tank_length?: number | undefined
  tank_width?: number | undefined
  total_catch?: number | undefined
  url?: string | undefined
}
type NHTool = {
  availability?: { from?: string | undefined; note?: string | undefined }[] | undefined
  buy?: { currency?: string | undefined; price?: number | undefined }[] | undefined
  custom_body_part?: string | undefined
  custom_kits?: number | undefined
  customizable?: boolean | undefined
  hha_base?: number | undefined
  name?: string | undefined
  notes?: string | undefined
  sell?: number | undefined
  unlocked?: boolean | undefined
  url?: string | undefined
  uses?: number | undefined
  variations?: { image_url?: string | undefined; variation?: string | undefined }[] | undefined
  version_added?: string | undefined
}
type Villager = {
  alt_name?: string | undefined
  appearances?:
    | ('DNM' | 'AC' | 'E_PLUS' | 'WW' | 'CF' | 'NL' | 'WA' | 'NH' | 'FILM' | 'HHD' | 'PC')[]
    | undefined
  birthday_day?: string | undefined
  birthday_month?: string | undefined
  clothing?: string | undefined
  debut?:
    | 'DNM'
    | 'AC'
    | 'E_PLUS'
    | 'WW'
    | 'CF'
    | 'NL'
    | 'WA'
    | 'NH'
    | 'FILM'
    | 'HHD'
    | 'PC'
    | undefined
  gender?: 'Male' | 'Female' | undefined
  id?: string | undefined
  image_url?: string | undefined
  islander?: boolean | undefined
  name?: string | undefined
  nh_details?:
    | {
        catchphrase?: string | undefined
        clothing?: string | undefined
        clothing_variation?: string | undefined
        fav_colors?: string[] | undefined
        fav_styles?: string[] | undefined
        hobby?: 'Education' | 'Fashion' | 'Fitness' | 'Music' | 'Nature' | 'Play' | undefined
        house_exterior_url?: string | undefined
        house_flooring?: string | undefined
        house_interior_url?: string | undefined
        house_music?: string | undefined
        house_music_note?: string | undefined
        house_wallpaper?: string | undefined
        icon_url?: string | undefined
        image_url?: string | undefined
        photo_url?: string | undefined
        quote?: string | undefined
        'sub-personality'?: 'A' | 'B' | undefined
      }
    | undefined
  personality?:
    | 'Cranky'
    | 'Jock'
    | 'Lazy'
    | 'Normal'
    | 'Peppy'
    | 'Sisterly'
    | 'Smug'
    | 'Snooty'
    | undefined
  phrase?: string | undefined
  prev_phrases?: string[] | undefined
  quote?: string | undefined
  sign?:
    | 'Aries'
    | 'Taurus'
    | 'Gemini'
    | 'Cancer'
    | 'Leo'
    | 'Virgo'
    | 'Libra'
    | 'Scorpio'
    | 'Sagittarius'
    | 'Capricorn'
    | 'Aquarius'
    | 'Pisces'
    | undefined
  species?:
    | 'Alligator'
    | 'Anteater'
    | 'Bear'
    | 'Bird'
    | 'Bull'
    | 'Cat'
    | 'Cub'
    | 'Chicken'
    | 'Cow'
    | 'Deer'
    | 'Dog'
    | 'Duck'
    | 'Eagle'
    | 'Elephant'
    | 'Frog'
    | 'Goat'
    | 'Gorilla'
    | 'Hamster'
    | 'Hippo'
    | 'Horse'
    | 'Koala'
    | 'Kangaroo'
    | 'Lion'
    | 'Monkey'
    | 'Mouse'
    | 'Octopus'
    | 'Ostrich'
    | 'Penguin'
    | 'Pig'
    | 'Rabbit'
    | 'Rhino'
    | 'Sheep'
    | 'Squirrel'
    | 'Tiger'
    | 'Wolf'
    | undefined
  text_color?: string | undefined
  title_color?: string | undefined
  url?: string | undefined
}
type Error400 = { details?: string | undefined; title?: string | undefined }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/nh/art': {
      $get:
        | {
            input: {
              query: {
                hasfake?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHArtwork[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                hasfake?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                hasfake?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/art/:artwork': {
      $get:
        | {
            input: { param: { artwork: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHArtwork
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { artwork: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { artwork: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/bugs': {
      $get:
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHBug[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/bugs/:bug': {
      $get:
        | {
            input: { param: { bug: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHBug
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { bug: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { bug: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { bug: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/clothing': {
      $get:
        | {
            input: {
              query: {
                category?:
                  | 'Tops'
                  | 'Bottoms'
                  | 'Dress-up'
                  | 'Headwear'
                  | 'Accessories'
                  | 'Socks'
                  | 'Shoes'
                  | 'Bags'
                  | 'Umbrellas'
                  | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                style?:
                  | ('Active' | 'Cool' | 'Cute' | 'Elegant' | 'Gorgeous' | 'Simple')[]
                  | undefined
                labeltheme?:
                  | 'Comfy'
                  | 'Everyday'
                  | 'Fairy tale'
                  | 'Formal'
                  | 'Goth'
                  | 'Outdoorsy'
                  | 'Party'
                  | 'Sporty'
                  | 'Theatrical'
                  | 'Vacation'
                  | 'Work'
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHClothing[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?:
                  | 'Tops'
                  | 'Bottoms'
                  | 'Dress-up'
                  | 'Headwear'
                  | 'Accessories'
                  | 'Socks'
                  | 'Shoes'
                  | 'Bags'
                  | 'Umbrellas'
                  | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                style?:
                  | ('Active' | 'Cool' | 'Cute' | 'Elegant' | 'Gorgeous' | 'Simple')[]
                  | undefined
                labeltheme?:
                  | 'Comfy'
                  | 'Everyday'
                  | 'Fairy tale'
                  | 'Formal'
                  | 'Goth'
                  | 'Outdoorsy'
                  | 'Party'
                  | 'Sporty'
                  | 'Theatrical'
                  | 'Vacation'
                  | 'Work'
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                category?:
                  | 'Tops'
                  | 'Bottoms'
                  | 'Dress-up'
                  | 'Headwear'
                  | 'Accessories'
                  | 'Socks'
                  | 'Shoes'
                  | 'Bags'
                  | 'Umbrellas'
                  | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                style?:
                  | ('Active' | 'Cool' | 'Cute' | 'Elegant' | 'Gorgeous' | 'Simple')[]
                  | undefined
                labeltheme?:
                  | 'Comfy'
                  | 'Everyday'
                  | 'Fairy tale'
                  | 'Formal'
                  | 'Goth'
                  | 'Outdoorsy'
                  | 'Party'
                  | 'Sporty'
                  | 'Theatrical'
                  | 'Vacation'
                  | 'Work'
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/clothing/:clothing': {
      $get:
        | {
            input: { param: { clothing: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHClothing
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { clothing: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { clothing: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/events': {
      $get:
        | {
            input: {
              query: {
                date?: string | undefined
                year?: string | undefined
                month?: string | undefined
                day?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHEvent[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                date?: string | undefined
                year?: string | undefined
                month?: string | undefined
                day?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                date?: string | undefined
                year?: string | undefined
                month?: string | undefined
                day?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fish': {
      $get:
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHFish[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fish/:fish': {
      $get:
        | {
            input: { param: { fish: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHFish
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fish: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fish: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { fish: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/all': {
      $get:
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHFossilGroupWithIndividualFossilsNoMatched[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/all/:fossil': {
      $get:
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHFossilGroupWithIndividualFossils
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/groups': {
      $get:
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHFossilGroup[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/groups/:fossil_group': {
      $get:
        | {
            input: { param: { fossil_group: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHFossilGroup
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fossil_group: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fossil_group: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/individuals': {
      $get:
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHIndividualFossil[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/fossils/individuals/:fossil': {
      $get:
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHIndividualFossil
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { fossil: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/furniture': {
      $get:
        | {
            input: {
              query: {
                category?: 'Housewares' | 'Miscellaneous' | 'Wall-mounted' | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHFurniture[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                category?: 'Housewares' | 'Miscellaneous' | 'Wall-mounted' | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                category?: 'Housewares' | 'Miscellaneous' | 'Wall-mounted' | undefined
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/furniture/:furniture': {
      $get:
        | {
            input: { param: { furniture: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHFurniture
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { furniture: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { furniture: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/interior': {
      $get:
        | {
            input: {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHInterior[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                excludedetails?: string | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/interior/:item': {
      $get:
        | {
            input: { param: { item: string } } & {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHInterior
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { item: string } } & {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { item: string } } & {
              query: {
                color?:
                  | (
                      | 'Aqua'
                      | 'Beige'
                      | 'Black'
                      | 'Blue'
                      | 'Brown'
                      | 'Colorful'
                      | 'Gray'
                      | 'Green'
                      | 'Orange'
                      | 'Pink'
                      | 'Purple'
                      | 'Red'
                      | 'White'
                      | 'Yellow'
                    )[]
                  | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/items': {
      $get:
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHItem[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/items/:item': {
      $get:
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHItem
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/photos': {
      $get:
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHPhoto[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/photos/:item': {
      $get:
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHPhoto
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/recipes': {
      $get:
        | {
            input: {
              query: {
                material?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHRecipe[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                material?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                material?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/recipes/:item': {
      $get:
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHRecipe
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { item: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/sea': {
      $get:
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHSeaCreature[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                month?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/sea/:sea_creature': {
      $get:
        | {
            input: { param: { sea_creature: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: NHSeaCreature
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sea_creature: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { sea_creature: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error404
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { sea_creature: string } } & {
              query: { thumbsize?: number | undefined }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/tools': {
      $get:
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHTool[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { excludedetails?: string | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/nh/tools/:tool': {
      $get:
        | {
            input: { param: { tool: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: NHTool
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { tool: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { tool: string } } & { query: { thumbsize?: number | undefined } } & {
              header: { 'X-API-KEY': string; 'Accept-Version': string }
            }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/villagers': {
      $get:
        | {
            input: {
              query: {
                name?: string | undefined
                species?:
                  | 'alligator'
                  | 'anteater'
                  | 'bear'
                  | 'bird'
                  | 'bull'
                  | 'cat'
                  | 'cub'
                  | 'chicken'
                  | 'cow'
                  | 'deer'
                  | 'dog'
                  | 'duck'
                  | 'eagle'
                  | 'elephant'
                  | 'frog'
                  | 'goat'
                  | 'gorilla'
                  | 'hamster'
                  | 'hippo'
                  | 'horse'
                  | 'koala'
                  | 'kangaroo'
                  | 'lion'
                  | 'monkey'
                  | 'mouse'
                  | 'octopus'
                  | 'ostrich'
                  | 'penguin'
                  | 'pig'
                  | 'rabbit'
                  | 'rhino'
                  | 'sheep'
                  | 'squirrel'
                  | 'tiger'
                  | 'wolf'
                  | undefined
                personality?:
                  | 'lazy'
                  | 'jock'
                  | 'cranky'
                  | 'smug'
                  | 'normal'
                  | 'peppy'
                  | 'snooty'
                  | 'sisterly'
                  | undefined
                game?:
                  | (
                      | 'DNM'
                      | 'AC'
                      | 'E_PLUS'
                      | 'WW'
                      | 'CF'
                      | 'NL'
                      | 'WA'
                      | 'NH'
                      | 'FILM'
                      | 'HHD'
                      | 'PC'
                    )[]
                  | undefined
                birthmonth?: string | undefined
                birthday?: string | undefined
                nhdetails?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Villager[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                name?: string | undefined
                species?:
                  | 'alligator'
                  | 'anteater'
                  | 'bear'
                  | 'bird'
                  | 'bull'
                  | 'cat'
                  | 'cub'
                  | 'chicken'
                  | 'cow'
                  | 'deer'
                  | 'dog'
                  | 'duck'
                  | 'eagle'
                  | 'elephant'
                  | 'frog'
                  | 'goat'
                  | 'gorilla'
                  | 'hamster'
                  | 'hippo'
                  | 'horse'
                  | 'koala'
                  | 'kangaroo'
                  | 'lion'
                  | 'monkey'
                  | 'mouse'
                  | 'octopus'
                  | 'ostrich'
                  | 'penguin'
                  | 'pig'
                  | 'rabbit'
                  | 'rhino'
                  | 'sheep'
                  | 'squirrel'
                  | 'tiger'
                  | 'wolf'
                  | undefined
                personality?:
                  | 'lazy'
                  | 'jock'
                  | 'cranky'
                  | 'smug'
                  | 'normal'
                  | 'peppy'
                  | 'snooty'
                  | 'sisterly'
                  | undefined
                game?:
                  | (
                      | 'DNM'
                      | 'AC'
                      | 'E_PLUS'
                      | 'WW'
                      | 'CF'
                      | 'NL'
                      | 'WA'
                      | 'NH'
                      | 'FILM'
                      | 'HHD'
                      | 'PC'
                    )[]
                  | undefined
                birthmonth?: string | undefined
                birthday?: string | undefined
                nhdetails?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error400
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                name?: string | undefined
                species?:
                  | 'alligator'
                  | 'anteater'
                  | 'bear'
                  | 'bird'
                  | 'bull'
                  | 'cat'
                  | 'cub'
                  | 'chicken'
                  | 'cow'
                  | 'deer'
                  | 'dog'
                  | 'duck'
                  | 'eagle'
                  | 'elephant'
                  | 'frog'
                  | 'goat'
                  | 'gorilla'
                  | 'hamster'
                  | 'hippo'
                  | 'horse'
                  | 'koala'
                  | 'kangaroo'
                  | 'lion'
                  | 'monkey'
                  | 'mouse'
                  | 'octopus'
                  | 'ostrich'
                  | 'penguin'
                  | 'pig'
                  | 'rabbit'
                  | 'rhino'
                  | 'sheep'
                  | 'squirrel'
                  | 'tiger'
                  | 'wolf'
                  | undefined
                personality?:
                  | 'lazy'
                  | 'jock'
                  | 'cranky'
                  | 'smug'
                  | 'normal'
                  | 'peppy'
                  | 'snooty'
                  | 'sisterly'
                  | undefined
                game?:
                  | (
                      | 'DNM'
                      | 'AC'
                      | 'E_PLUS'
                      | 'WW'
                      | 'CF'
                      | 'NL'
                      | 'WA'
                      | 'NH'
                      | 'FILM'
                      | 'HHD'
                      | 'PC'
                    )[]
                  | undefined
                birthmonth?: string | undefined
                birthday?: string | undefined
                nhdetails?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error401
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                name?: string | undefined
                species?:
                  | 'alligator'
                  | 'anteater'
                  | 'bear'
                  | 'bird'
                  | 'bull'
                  | 'cat'
                  | 'cub'
                  | 'chicken'
                  | 'cow'
                  | 'deer'
                  | 'dog'
                  | 'duck'
                  | 'eagle'
                  | 'elephant'
                  | 'frog'
                  | 'goat'
                  | 'gorilla'
                  | 'hamster'
                  | 'hippo'
                  | 'horse'
                  | 'koala'
                  | 'kangaroo'
                  | 'lion'
                  | 'monkey'
                  | 'mouse'
                  | 'octopus'
                  | 'ostrich'
                  | 'penguin'
                  | 'pig'
                  | 'rabbit'
                  | 'rhino'
                  | 'sheep'
                  | 'squirrel'
                  | 'tiger'
                  | 'wolf'
                  | undefined
                personality?:
                  | 'lazy'
                  | 'jock'
                  | 'cranky'
                  | 'smug'
                  | 'normal'
                  | 'peppy'
                  | 'snooty'
                  | 'sisterly'
                  | undefined
                game?:
                  | (
                      | 'DNM'
                      | 'AC'
                      | 'E_PLUS'
                      | 'WW'
                      | 'CF'
                      | 'NL'
                      | 'WA'
                      | 'NH'
                      | 'FILM'
                      | 'HHD'
                      | 'PC'
                    )[]
                  | undefined
                birthmonth?: string | undefined
                birthday?: string | undefined
                nhdetails?: string | undefined
                excludedetails?: string | undefined
                thumbsize?: number | undefined
              }
            } & { header: { 'X-API-KEY': string; 'Accept-Version': string } }
            output: Error500
            outputFormat: 'json'
            status: 500
          }
    }
  },
  '/'
>
export default routes
