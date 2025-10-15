export { default } from "next-auth/middleware";
// aca podemos proteger las diferentes rutas
// por ejemplo aca protegemos desde dashboard todo lo que venga despues con el :path*
export const config = { matcher: ["/dashboard/:path*", "/cursos/:path*"], }