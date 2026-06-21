import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Simulamos un tiempo de carga (Santi tiene internet lento)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // 30% de probabilidad de fallar de adrede para que QA pruebe el error
    const isError = Math.random() < 0.3; 

    if (isError) {
      return NextResponse.json(
        { error: "El archivo es muy pesado para tus datos. Límite: 5MB." },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "¡Tarea entregada con éxito! Ya puedes descansar." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Error de servidor" }, { status: 500 });
  }
}