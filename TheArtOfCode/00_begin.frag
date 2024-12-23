void mainImage ( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv = fragCoord.xy / iResolution.xy; // 0 <> 1.

    uv = uv - 0.5;          // -0.5 <> 0.5 Now the 0 starts at the middle of our screen
    uv.x *= iResolution.x/iResolution.y;


    float d = length(uv);
    float r = 0.3;

    float c = smoothstep(r, r-0.05, d);
    // if (d < 0.3)
    // {
    //     c = 1.;
    // }
    // else{
    //     c = 0.;
    // }

    fragColor = vec4(vec3(c), 1.0);
}