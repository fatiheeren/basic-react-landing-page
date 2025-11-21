import { useState, useMemo } from "react";
import { FaHome } from "react-icons/fa";

function Hesaplama() {
  const [adet, setAdet] = useState(1);

  const toplamFiyat = useMemo(() => {
    return adet * 500
  }, [adet]);

  const arttir = () => {
    setAdet(adet + 1);
  };

  const azalt = () => {
    setAdet(adet - 1);
  };

  return (
    <div style={{
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'space-around',
        padding: '20px',
        alignItems: 'center',

      }}>
        <h2>İzeer</h2>
        <a href="Link1-bağlantısı"  style={{
          textDecoration: 'none',
          color: '#333',
          fontWeight: 'bold',

          
        }}> Link1</a>
        <a href= "Link2-bağlantısı"  style={{
          textDecoration: 'none',
          color: '#333',
          fontWeight: 'bold',
        }}> Link2</a>
        <FaHome size={30} color="blue" />

      </nav>

      <div style={{
        textAlign: 'center'

      }}>
        <h1 style={{
          fontSize: '50px'
        }}>Yazılım Kariyerine Başla</h1>
        <p style={{
          fontSize: '20px',
          color: 'darkblue'
        }}>Sıfırdan ileri seviyeye React öğrenin.</p>
      </div >
      <div style={{
        border: '10px solid #8a7474ff',      
        borderRadius: '25px',          
        padding: '30px',               
        width: '350px',                
        margin: '50px auto',           
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', 
        textAlign: 'center',           
        fontFamily: 'Arial, sans-serif' 
      }}>
        <h1>Kitap Sipariş Ekranı</h1>
        <p>Seçilen Adet: {adet}</p>
        <h3>Toplam Tutar: {toplamFiyat}</h3>
        <button onClick={arttir}
          style={{
            width: '40px',
            height: '40px',
            color: 'white',
            margin: '0 15px',     
            fontSize: '24px',
            cursor: 'pointer',
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
          }}>+</button>
        <button onClick={azalt} disabled={adet <= 1}
          style={{
            width: '40px',
            height: '40px',
            color: 'white',
            margin: '0 15px',     
            fontSize: '24px',
            cursor: 'pointer',
            backgroundColor: '#333',
            border: 'none',
            borderRadius: '50%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
          }}>-</button>
        <button onClick={() => alert(adet + " adet ürün sepete eklendi!")}
          style={{
            width: '100%',         
            padding: '15px',
            backgroundColor: '#28a745', 
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
            marginTop: '20px',      
            fontWeight: 'bold'
          }}>Hemen Al!!</button>

      </div>
      <footer style={{
        backgroundColor: '#333',
        color: 'white',
        padding: '10px',
      }}>
        <p>© 2025 İzeer Yazılım. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );

}
export default Hesaplama;