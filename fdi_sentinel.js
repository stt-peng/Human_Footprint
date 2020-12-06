var lmb_red = 664.6;
var lmb_r_e_2 = 740.5;
var lmb_nir = 832.8;
var lmb_swir_1 = 1613.7;

let r_prim = B06 + (B11 - B06) * ((lmb_nir - lmb_red) / (lmb_swir_1 - lmb_red)) * 10;

let fdi = B08 - r_prim;

return colorBlend
(
    fdi,
    [0, 0.05, 0.1],
    [
        [0, 0, 1],
        [0, 1, 0],
        [1, 0, 0]
    ]
);
