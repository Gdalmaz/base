import React, { useState ,useEffect} from 'react';
import '../css/post.css';

const Addsubmenu = () => {
  
  const [image1, setImage1] = useState(null); // State for first photo
  const [image2, setImage2] = useState(null); // State for second photo
  const [inputs, setInputs] = useState([
    { option: 'Gözlükler', inputValue: '', delete: false }, // Başlangıç option'ı
  ]);

  const handleAddInput = () => {
    setInputs([...inputs, { option: '', inputValue: '', delete: false }]);
  };

  const handleRemoveInput = (e,index) => {
    e.preventDefault();
    if (inputs.length <= 1) return;
    const newInputs = [...inputs];
    newInputs[index].delete = true;
    setInputs(newInputs);
  };
  const handleImageChange1 = (e) => {
    if (e.target.files[0]) {
      setImage1(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImageChange2 = (e) => {
    if (e.target.files[0]) {
      setImage2(URL.createObjectURL(e.target.files[0]));
    }
  };
  useEffect(() => {
    const filteredInputs = inputs.filter((item) => !item.delete);
    setInputs(filteredInputs);
  }, [inputs]);

  return (
    <form>
    <div className="dungens">
      <div className="firstphoto">
        {image1 ? (
          <img src={image1} alt="Preview (First Photo)" className="fit-image" />
        ) : (
          <div className="empty">Please choose your photo</div>
        )}
        <input
          type="file"
          name="image1" // Name for first photo upload
          accept="image/*"
          onChange={handleImageChange1}
          className="photobutton"
        />
      </div>

      <div className="secondphoto">
        {image2 ? (
          <img src={image2} alt="Preview (Second Photo)" className="fit-image" />
        ) : (
          <div className="empty">Please choose your photo</div>
        )}
        <input
          type="file"
          name="image2" // Name for second photo upload
          accept="image/*"
          onChange={handleImageChange2}
          className="photobutton"
        />
      </div>
      <div className='valuesofinputs'>
  <label>
    <h3>Proje Adı Giriniz</h3>
    <input type="text" placeholder="Proje Adını Giriniz" />
  </label>
  <label>
    <h3>Proje Detay</h3>
    <textarea placeholder='Projenizde Detaylarını Giriniz'></textarea>
  </label>
    </div>


      <h4>Lütfen Hangi Malzemeyi Kullandığınızı Ve Sayısını Giriniz</h4>

    {inputs.map((item, index) => (
  <div key={index} className='secenekler'>
    <select
      value={item.option}
      onChange={(e) =>
        setInputs((prevInputs) =>
          prevInputs.map((i) =>
            i.option === item.option && { ...i, option: e.target.value } || i
          )
        )
      }
    >
      <option disabled value="">Seçiniz</option>
      <option value="Eldivenler">Eldivenler</option>
      <option value="Maskeler">Maskeler</option>
      <option value="Torbalar">Torbalar</option>
      <option value="Süpürgeler">Süpürgeler</option>
      <option value="Kovalar">Kovalar</option>
      <option value="Paspaslar">Paspaslar</option>
      <option value="Fırçalar">Fırçalar</option>
      <option value="Kimyasallar">Kimyasallar</option>
      <option value="Su">Su</option>
    </select>
    <input
      type="text"
      value={item.inputValue}
      onChange={(e) =>
        setInputs((prevInputs) =>
          prevInputs.map((i) =>
            i.option === item.option && { ...i, inputValue: e.target.value } || i
          )
        )
      }
    />
    <button onClick={() => handleAddInput()} type="button">+</button>
    <button onClick={(e) => handleRemoveInput(e, index)}>-</button>
  </div>
))}

<input
        type="submit"
        className="custom-submit-button"
        value="Submit" // Optional: Set the button text
      />
    </div>
    
    </form>
  );
};

export default Addsubmenu;
