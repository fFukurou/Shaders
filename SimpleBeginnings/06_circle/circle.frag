// #ifdef GL_ES
// precision mediump float;
// #endif

// // Uniform is something that can pass shader from a vertex shader to a fragment shader

// uniform vec2 u_resolution;

// float circleShape(vec2 position, float radius) {
//     return step(radius, length(position - vec2(0.5)));

// }


// void main () {
//     vec2 position = gl_FragCoord.xy / u_resolution;

//     vec3 color = vec3(0.0);

//     float circle = circleShape(position, 0.3);

//     color = vec3(circle);

//     gl_FragColor = vec4(color, 1.0);
// }

#ifdef GL_ES
precision mediump float;
#endif


float circleshape(vec2 position, float radius){
    return step(radius, length(position-vec2(0.5)));
}
void main(){
    vec2 position = gl_FragCoord.xy / iResolution.xy;
    vec3 color = vec3(0.0); // <-- This does fucking nothing at this point
    
    float circle = circleshape(position, 0.2);

    color = vec3(circle);

    gl_FragColor = vec4(color, 1.0);
}